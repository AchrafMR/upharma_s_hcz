import Popup from "./popup";
import "./articlesTable";
import "../../../styles/mouvement/operationPatient.scss";

document.addEventListener("DOMContentLoaded", () => {
  const popup = new Popup("#opPatientPopup");
  const openBtn = document.getElementById("btnAddPatient");
  const form = document.getElementById("opPatientPopup-form");
  const container = document.getElementById("patientInfoContainer");

  const ippInput = document.getElementById("opPatientPopup-ipp");
  const nomInput = document.getElementById("opPatientPopup-nom_patient");
  const diSelect = document.getElementById("opPatientPopup-dossier_imputation");
  const dossierInput = document.getElementById(
    "opPatientPopup-dossier_patient"
  );
  const conventionInput = document.getElementById("opPatientPopup-convention");

  let ippIsValid = false;
  const selectedPatient = [];

  if (openBtn) openBtn.addEventListener("click", () => popup.open());

  // === Auto-fetch and fill data by IPP ===
  if (ippInput) {
    ippInput.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        await fetchPatientByIPP();
      }
    });

    ippInput.addEventListener("blur", async () => {
      if (ippInput.value.trim() !== "") {
        await fetchPatientByIPP();
      }
    });

    ippInput.addEventListener("input", () => {
      ippIsValid = false;
      nomInput.value = "";
      dossierInput.value = "";
      conventionInput.value = "";
      diSelect.innerHTML = `<option value="" selected disabled>-- Sélectionner DI --</option>`;
    });
  }

  async function fetchPatientByIPP() {
    const ipp = ippInput.value.trim();
    if (!ipp) return;

    try {
      const res = await fetch(`/mouvement/hosix/find-patient/${ipp}`);
      if (!res.ok) throw new Error();

      const data = await res.json();

      if (data && data.di && data.patient) {
        nomInput.value = data.patient || "";
        diSelect.innerHTML = `<option value="${data.di}" selected>${data.di}</option>`;
        dossierInput.value = data.dossier || "";
        conventionInput.value = data.organisme || "";
        ippIsValid = true;
      } else {
        ippIsValid = false;
        toastr.error("Aucun patient trouvé pour cet IPP.");
      }
    } catch (err) {
      ippIsValid = false;
      toastr.error("IPP invalide ou introuvable.");
    }
  }

  // === Form submit ===
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!simpleValidate(form)) return;
      if (!ippIsValid) {
        toastr.error("IPP incorrect. Veuillez corriger avant d'enregistrer.");
        ippInput.focus();
        return;
      }

      const formData = Object.fromEntries(new FormData(form).entries());
      const nomText = nomInput.value.trim();
      const diText =
        diSelect.options[diSelect.selectedIndex]?.textContent.trim() || "";
      const dossierText = dossierInput.value.trim();
      const conventionText = conventionInput.value.trim();

      // Store the data in array
      window.selectedPatient = {
        ipp: formData.ipp,
        nom_patient: nomText,
        di: diText,
        dossier: dossierText,
        convention: conventionText,
      };

      container.innerHTML = `
        <fieldset class="card-fieldset">
          <legend class="card-legend mt-3">Informations Patient</legend>
          <div class="row mb-1">
            <div class="col-md-12 ml-4" style="font-size: 1.25rem;"><strong> ${escapeHtml(
              nomText
            )}</strong></div>
          </div>
          <div class="row mb-1">
          <div class="col-md-5 ml-5">DI: ${escapeHtml(diText)}</div>
          <div class="col-md-6">Dossier: ${escapeHtml(dossierText)}</div>
          </div>
          <div class="row mb-2">
            <div class="col-md-5 ml-5">Convention: ${escapeHtml(
              conventionText
            )}</div>
            <div class="col-md-6">cin: ${escapeHtml(dossierText)}</div>
          </div>
        </fieldset>
      `;

      popup.close();
      form.reset();
      ippIsValid = false;
    });
  }
});

// === Simple validation popup ===
function simpleValidate(form) {
  const ipp = form.elements["ipp"]?.value.trim();
  const di = form.elements["dossier_imputation"]?.value.trim();

  if (!ipp) {
    toastr.error("Veuillez remplir le champ IPP");
    form.elements["ipp"]?.focus();
    return false;
  }

  if (!di) {
    toastr.error("Veuillez sélectionner un DI");
    form.elements["dossier_imputation"]?.focus();
    return false;
  }

  return true;
}

// === Escape HTML ===
function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

//open modal ajo
$(document).on("click", ".ajouterDemandePatient", function () {
  const modalSelector = `#ajouterDemandePatient`;
  $(modalSelector).modal("show");
});




$(document).ready(function () {
  // Save Demande
  $("body").on("click", ".saveDemandePatient", async function (e) {
    e.preventDefault();
    const $btn = $(this);
    $btn.prop("disabled", true);

    try {
      const demandeur_id = $("#demandeur_id").val() || null;
      const type_demande = Number($("#type_demande").val()) || 2;
      const description = ($("#description").val() || "").trim();
      const urgent = $("#urgent").is(":checked") ? 1 : 0;

      const ipp = window.selectedPatient?.ipp || null;
      const diPatient = window.selectedPatient?.di || null;
      const nom_patient = window.selectedPatient?.nom_patient || null;

      if (!demandeur_id) return toastr.error("Choisissez un magasin demandeur.");
      if (!ipp || !diPatient || !nom_patient) {
        toastr.warning("IPP, DI ou Nom du patient manquant(s).");
      }

      const lignes = [];
      $("#articlesTableBody tr.locked-row").each(function () {
        const $tr = $(this);
        const id = $tr.find("input.hidden-article-id").val();
        const title = $tr.find(".locked-article-label").data("title") || "";
        const quantity = Number($tr.find("input.hidden-qty").val());
        const qty_in_stock = Number($tr.find("input.hidden-qtyInStock").val()) || 0;

        if (id && Number.isFinite(quantity) && quantity > 0) {
          lignes.push({ id, title, quantity, qty_in_stock });
        }
      });

      if (!lignes.length) return toastr.error("Ajoutez au moins une ligne produit.");

      const payload = {
        demandeur_id,
        type_demande,
        description,
        urgent,
        ipp,
        di: diPatient,
        nom_patient,
        lignes,
      };

      const response = await $.ajax({
        url: "/mouvement/save-demande",
        method: "POST",
        data: JSON.stringify(payload),
        contentType: "application/json",
      });

      if (response?.demande_id) {
        // Split lignes into sortie and commande
        const lignesSortie = [], lignesCommande = [];

        lignes.forEach((l) => {
          const q = Number(l.quantity);
          const s = Number(l.qty_in_stock);
          if (!Number.isFinite(q) || q <= 0) return;

          if (s >= q) {
            lignesSortie.push(l);
          } else if (s > 0 && q > s) {
            lignesSortie.push({ ...l, quantity: s });
            lignesCommande.push({ ...l, quantity: q - s });
          } else {
            lignesCommande.push(l);
          }
        });

        // Save to window for next step
        window.savedDemandes = [];
        if (lignesSortie.length) {
          window.savedDemandes.push({
            ...payload,
            demande_id: response.demande_id,
            lignes: lignesSortie,
          });
        }
        if (lignesCommande.length) {
          window.savedDemandes.push({
            ...payload,
            demande_id: response.demande_id,
            lignes: lignesCommande,
          });
        }

        toastr.success("Demande enregistrée avec succès.");
        $("#ajouterDemandePatient").modal("hide");

        if (typeof renderLignesToPanels === "function") {
          renderLignesToPanels([...lignesSortie, ...lignesCommande]);
        }
      } else {
        toastr.error("Erreur: ID de demande non retourné.");
      }
    } catch (err) {
      const msg = err?.responseJSON?.message || "Erreur lors de l’enregistrement de la demande.";
      toastr.error(msg);
    } finally {
      $btn.prop("disabled", false);
    }
  });

  // Save Commande
  $("body").on("click", ".saveCommandePatient", async function (e) {
    e.preventDefault();
    const $btn = $(this);
    $btn.prop("disabled", true);

    try {
      const demandes = window.savedDemandes || [];
      if (!demandes.length) return toastr.error("Aucune demande sauvegardée.");

      const sendPayload = (data) =>
        $.ajax({
          url: "/mouvement/save-commande",
          method: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
        });

      // const requests = demandes.map((demande) =>
      //   sendPayload({
      //     demande_id: demande.demande_id,
      //     lignes: demande.lignes,
      //   })
      // );
     const requests = demandes.map((demande) => {
        // Detect type_operation based on lignes
        const isSortieStock = demande.lignes.every((l) => l.qty_in_stock >= l.quantity);
        const type_operation = isSortieStock ? 2 : 1;

        return sendPayload({
          demande_id: demande.demande_id,
          demandeur_id: demande.demandeur_id,
          type_demande: demande.type_demande,
          description: demande.description,
          urgent: demande.urgent,
          ipp: demande.ipp,
          di: demande.di,
          nom_patient: demande.nom_patient,
          lignes: demande.lignes,
          type_operation, 
        });
      });


      await Promise.all(requests);

      toastr.success("Commande(s) enregistrée(s) avec succès.");
      $("#ajouterDemandePatient").modal("hide");
      $("#articlesTableBody tr.locked-row").remove();
    } catch (err) {
      const msg = err?.responseJSON?.message || "Erreur lors de l’enregistrement des commandes.";
      toastr.error(msg);
    } finally {
      $btn.prop("disabled", false);
    }
  });
});




// $(function () {
//   window.savedDemandes = [];

//   $("body").on("click", ".saveDemandePatient", async function (e) {
//     e.preventDefault();
//     const $btn = $(this);
//     $btn.prop("disabled", true);

//     const demandeur_id = $("#demandeur_id").val() || null;
//     const recepteur_id = null;
//     const type_demande = $("#type_demande").val() || 2;
//     const description = ($("#description").val() || "").trim();
//     const urgent = $("#urgent").is(":checked") ? 1 : 0;

//     const ipp = window.selectedPatient?.ipp || null;
//     const diPatient = window.selectedPatient?.di || null;
//     const nom_patient = window.selectedPatient?.nom_patient || null;

//     const lignes = [];
//     $("#articlesTableBody tr.locked-row").each(function () {
//       const $tr = $(this);
//       const id = $tr.find("input.hidden-article-id").val();
//       const title = $tr.find(".locked-article-label").data("title") || "";
//       const quantity = Number($tr.find("input.hidden-qty").val());
//       const qty_in_stock = Number($tr.find("input.hidden-qtyInStock").val()) || 0;

//       if (id && Number.isFinite(quantity) && quantity > 0) {
//         lignes.push({ id, title, quantity, qty_in_stock });
//       }
//     });

//     if (!demandeur_id) return toastr.error("Choisissez un magasin demandeur.");
//     if (!lignes.length) return toastr.error("Ajoutez au moins une ligne produit.");
//     if (!ipp || !diPatient || !nom_patient) {
//       toastr.warning("IPP, DI ou Nom du patient manquant(s).");
//     }

//     const commonData = {
//       demandeur_id,
//       recepteur_id,
//       type_demande: Number(type_demande),
//       description,
//       urgent,
//       ipp,
//       di: diPatient,
//       nom_patient,
//       lignes,
//     };

//     const lignesSortie = [];
//     const lignesCommande = [];

//     lignes.forEach((l) => {
//       const q = Number(l.quantity);
//       const s = Number(l.qty_in_stock);
//       if (!Number.isFinite(q) || q <= 0) return;

//       if (s >= q && s > 0) {
//         lignesSortie.push(l);
//       } else if (s > 0 && q > s) {
//         lignesSortie.push({ ...l, quantity: s });
//         lignesCommande.push({ ...l, quantity: q - s });
//       } else {
//         lignesCommande.push(l);
//       }
//     });

//     const token = $btn.data("token") || "";

//     try {
//       // 1️⃣ Send /save-demande
//       const resDemande = await $.ajax({
//         url: "/mouvement/save-demande",
//         method: "POST",
//         data: JSON.stringify(commonData),
//         contentType: "application/json",
//         headers: token ? { "X-CSRF-TOKEN": token } : {},
//       });

//       if (!resDemande?.demande_id) throw new Error("Demande non enregistrée.");
//       const demande_id = resDemande.demande_id;

//       // 2️⃣ Send /save-commande for sortie & commande
//       const sortiePayload = {
//         demande_id,
//         lignes: lignesSortie,
//         type: "sortie", // optional
//       };
//       const commandePayload = {
//         demande_id,
//         lignes: lignesCommande,
//         type: "commande", // optional
//       };

//       const [res1, res2] = await Promise.all([
//         lignesSortie.length
//           ? $.ajax({
//               url: "/mouvement/save-commande",
//               method: "POST",
//               data: JSON.stringify(sortiePayload),
//               contentType: "application/json",
//               headers: token ? { "X-CSRF-TOKEN": token } : {},
//             })
//           : null,
//         lignesCommande.length
//           ? $.ajax({
//               url: "/mouvement/save-commande",
//               method: "POST",
//               data: JSON.stringify(commandePayload),
//               contentType: "application/json",
//               headers: token ? { "X-CSRF-TOKEN": token } : {},
//             })
//           : null,
//       ]);

//       // ✅ Save globally
//       window.savedDemandes = [];
//       if (lignesSortie.length)
//         window.savedDemandes.push({ ...sortiePayload, demande_id });
//       if (lignesCommande.length)
//         window.savedDemandes.push({ ...commandePayload, demande_id });

//       toastr.success("Commande(s) enregistrée(s) avec succès.");
//       $("#ajouterDemandePatient").modal("hide");
//       $("#articlesTableBody tr.locked-row").remove();

//       if (typeof renderLignesToPanels === "function") {
//         renderLignesToPanels([...lignesSortie, ...lignesCommande]);
//       }

//       console.log("✅ savedDemandes:", window.savedDemandes);
//     } catch (err) {
//       const msg = err?.responseJSON?.message || err.message || "Erreur.";
//       toastr.error(msg);
//     } finally {
//       $btn.prop("disabled", false);
//     }
//   });
// });



// save the demande patient (AJAX)
// $(function () {
//   window.savedDemandes = []; 

//   $("body").on("click", ".saveDemandePatient", function (e) {
//     e.preventDefault();

//     const $btn = $(this);

//     const demandeur_id = $("#demandeur_id").val() || null;
//     const recepteur_id = null;
//     const type_demande = $("#type_demande").val() || 2;
//     const description = ($("#description").val() || "").trim();
//     const urgent = $("#urgent").is(":checked") ? 1 : 0;

//     const ipp = window.selectedPatient?.ipp || null;
//     const diPatient = window.selectedPatient?.di || null;
//     const nom_patient = window.selectedPatient?.nom_patient || null;

//     const lignes = [];
//     $("#articlesTableBody tr.locked-row").each(function () {
//       const $tr = $(this);
//       const id = $tr.find("input.hidden-article-id").val();
//       const title = $tr.find(".locked-article-label").data("title") || "";
//       const quantity = Number($tr.find("input.hidden-qty").val());
//       const qty_in_stock = Number($tr.find("input.hidden-qtyInStock").val()) || 0;

//       if (id && Number.isFinite(quantity) && quantity > 0) {
//         lignes.push({ id, title, quantity, qty_in_stock });
//       }
//     });

//     if (!demandeur_id) {
//       toastr.error("Choisissez un magasin demandeur.");
//       return;
//     }
//     if (!lignes.length) {
//       toastr.error("Ajoutez au moins une ligne produit.");
//       return;
//     }
//     if (!ipp || !diPatient || !nom_patient) {
//       toastr.warning("IPP, DI ou Nom du patient manquant(s).");
//     }

//     const payload = {
//       demandeur_id,
//       recepteur_id,
//       type_demande: Number(type_demande),
//       description,
//       urgent,
//       ipp,
//       di: diPatient,
//       nom_patient,
//       lignes,
//     };

//     // Save to global array
//     window.savedDemandes.push(payload);
//     console.log(savedDemandes);

//     const url = $btn.data("url") || "/mouvement/save-demande";
//     const token = $btn.data("token") || "";

//     $btn.prop("disabled", true);

//     $.ajax({
//       url,
//       method: "POST",
//       data: JSON.stringify(payload),
//       contentType: "application/json",
//       headers: token ? { "X-CSRF-TOKEN": token } : {},
//     })
//       .done(function (response) {
//         toastr.success("Demande enregistrée avec succès.");
//         $("#ajouterDemandePatient").modal("hide");
//         $("#articlesTableBody tr.locked-row").remove();
//         if (response.demande_id && window.savedDemandes.length > 0) {
//           window.savedDemandes[window.savedDemandes.length - 1].demande_id = response.demande_id;
//           console.log("Demande ID linked:", response.demande_id);
//         }
//         renderLignesToPanels(lignes);
//       })
//       .fail(function (xhr) {
//         const msg =
//           xhr.responseJSON?.message || "Erreur lors de l’enregistrement.";
//         toastr.error(msg);
//       })
//       .always(function () {
//         $btn.prop("disabled", false);
//       });
//   });
// });
function renderLignesToPanels(lignes = []) {
  const sortieBlock = document.getElementById("sortiePatientBlock");
  const commandeBlock = document.getElementById("commandePatientBlock");
  if (!sortieBlock || !commandeBlock) return;

  sortieBlock.innerHTML = "";
  commandeBlock.innerHTML = "";

  const createListShell = () => `
    <div class="sp-list">
      <div class="sp-list-head">
        <span class="col-idx">#</span>
        <span class="col-produit">Produit</span>
        <span class="col-qty">Quantité</span>
      </div>
      <div class="sp-list-body"></div>
    </div>
  `;

  sortieBlock.innerHTML = createListShell();
  commandeBlock.innerHTML = createListShell();

  const sortieBody = sortieBlock.querySelector(".sp-list-body");
  const commandeBody = commandeBlock.querySelector(".sp-list-body");

  const buildRow = (index, title, qty, type) => {
    const rowClass =
      type === "sortie"
        ? "stock-full"
        : type === "commande"
        ? "stock-none"
        : "stock-partial";

    return `
      <div class="sp-row ${rowClass}">
        <span class="col-idx">${index}</span>
        <span class="col-produit" title="${escapeHtml(title)}">${escapeHtml(title)}</span>
        <span class="col-qty">${qty}</span>
      </div>
    `;
  };

  let sortieIndex = 0;
  let commandeIndex = 0;

  lignes.forEach((ligne) => {
    const { title, quantity, qty_in_stock } = ligne;

    const q = Number(quantity);
    const s = Number(qty_in_stock);

    if (!Number.isFinite(q) || q <= 0) return; // skip invalid lines

    //  Full in stock
    if (Number.isFinite(s) && s >= q && s > 0) {
      sortieIndex++;
      sortieBody.innerHTML += buildRow(sortieIndex, title, q, "sortie");
    }

    //  Partial stock
    else if (Number.isFinite(s) && s > 0 && q > s) {
      sortieIndex++;
      commandeIndex++;
      sortieBody.innerHTML += buildRow(sortieIndex, title, s, "partial");
      commandeBody.innerHTML += buildRow(commandeIndex, title, q - s, "partial");
    }

    //  No stock or invalid stock
    else {
      commandeIndex++;
      commandeBody.innerHTML += buildRow(commandeIndex, title, q, "commande");
    }
  });

  if (!sortieIndex) {
    sortieBody.innerHTML = `<div class="sp-empty">Aucune sortie pour le moment.</div>`;
  }
  if (!commandeIndex) {
    commandeBody.innerHTML = `<div class="sp-empty">Aucune commande pour le moment.</div>`;
  }
}

