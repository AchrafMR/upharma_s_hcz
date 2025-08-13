import Popup from './popup';
import './articlesTable'
import '../../../styles/mouvement/operationPatient.scss';

document.addEventListener('DOMContentLoaded', () => {
  const popup = new Popup('#opPatientPopup');
  const openBtn = document.getElementById('btnAddPatient');
  const form = document.getElementById('opPatientPopup-form');
  const container = document.getElementById('patientInfoContainer');

  const ippInput = document.getElementById('opPatientPopup-ipp');
  const nomInput = document.getElementById('opPatientPopup-nom_patient');
  const diSelect = document.getElementById('opPatientPopup-dossier_imputation');
  const dossierInput = document.getElementById('opPatientPopup-dossier_patient');
  const conventionInput = document.getElementById('opPatientPopup-convention');

  let ippIsValid = false;
  const selectedPatient = []; 

  if (openBtn) openBtn.addEventListener('click', () => popup.open());

  // === Auto-fetch and fill data by IPP ===
  if (ippInput) {
    ippInput.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        await fetchPatientByIPP();
      }
    });

    ippInput.addEventListener('blur', async () => {
      if (ippInput.value.trim() !== '') {
        await fetchPatientByIPP();
      }
    });

    ippInput.addEventListener('input', () => {
      ippIsValid = false;
      nomInput.value = '';
      dossierInput.value = '';
      conventionInput.value = '';
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
        nomInput.value = data.patient || '';
        diSelect.innerHTML = `<option value="${data.di}" selected>${data.di}</option>`;
        dossierInput.value = data.dossier || '';
        conventionInput.value = data.organisme || '';
        ippIsValid = true;
      } else {
        ippIsValid = false;
        toastr.error('Aucun patient trouvé pour cet IPP.');
      }
    } catch (err) {
      ippIsValid = false;
      toastr.error('IPP invalide ou introuvable.');
    }
  }

  // === Form submit ===
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!simpleValidate(form)) return;
      if (!ippIsValid) {
        toastr.error("IPP incorrect. Veuillez corriger avant d'enregistrer.");
        ippInput.focus();
        return;
      }

      const formData = Object.fromEntries(new FormData(form).entries());

      const nomText = nomInput.value.trim();
      const diText = diSelect.options[diSelect.selectedIndex]?.textContent.trim() || '';
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
        <div class="row">
          <div class="col-md-2"><strong>IPP:</strong> ${escapeHtml(formData.ipp)}</div>
          <div class="col-md-3"><strong>Nom Patient:</strong> ${escapeHtml(nomText)}</div>
          <div class="col-md-2"><strong>DI:</strong> ${escapeHtml(diText)}</div>
          <div class="col-md-2"><strong>Dossier Patient:</strong> ${escapeHtml(dossierText)}</div>
          <div class="col-md-3"><strong>Convention:</strong> ${escapeHtml(conventionText)}</div>
        </div>
      `;

      popup.close();
      form.reset();
      ippIsValid = false;
    });
  }
});

// === Simple validation popup ===
function simpleValidate(form) {
  const ipp = form.elements['ipp']?.value.trim();
  const di = form.elements['dossier_imputation']?.value.trim();

  if (!ipp) {
    toastr.error('Veuillez remplir le champ IPP');
    form.elements['ipp']?.focus();
    return false;
  }

  if (!di) {
    toastr.error('Veuillez sélectionner un DI');
    form.elements['dossier_imputation']?.focus();
    return false;
  }

  return true;
}

// === Escape HTML ===
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
//open modal ajo
$(document).on("click", ".ajouterDemandePatient", function () {
  const modalSelector = `#ajouterDemandePatient`;
  $(modalSelector).modal("show");
});




// save the demande patient (AJAX)
$(function () {
  $('body').on('click', '.saveDemandePatient', function (e) {
    e.preventDefault();

    const $btn = $(this);

    const demandeur_id = $('#demandeur_id').val() || null;
    const recepteur_id = null;
    const type_demande = $('#type_demande').val() || 2;
    const description = ($('#description').val() || '').trim();
    const urgent = $('#urgent').is(':checked') ? 1 : 0;

    const ipp = window.selectedPatient?.ipp || null;
    const diPatient = window.selectedPatient?.di || null;
    const nom_patient = window.selectedPatient?.nom_patient || null;

    const lignes = [];
    $('#articlesTableBody tr.locked-row').each(function () {
      const $tr = $(this);
      const id = $tr.find('input.hidden-article-id').val();
      const label = $tr.find('td.article-label')?.text()?.trim() || 'Article';
      const quantity = Number($tr.find('input.hidden-qty').val().trim());
      if (id && Number.isFinite(quantity) && quantity > 0) {
        lignes.push({ id, quantity, label });
      }
    });

    if (!demandeur_id) return toastr.error('Choisissez un magasin demandeur.');
    if (!lignes.length) return toastr.error('Ajoutez au moins une ligne produit.');
    if (!ipp || !diPatient || !nom_patient) {
      toastr.warning("IPP, DI ou Nom du patient manquant(s).");
    }

    const payload = {
      demandeur_id,
      recepteur_id,
      type_demande: Number(type_demande),
      description,
      urgent,
      ipp,
      di: diPatient,
      nom_patient,
      lignes,
    };

    const url1 = $btn.data('url') || '/mouvement/save-demande';
    const url2 = '/mouvement/fetch-stock';
    const token = $btn.data('token') || '';

    $btn.prop('disabled', true);

    // 1. Save Demande
    $.ajax({
      url: url1,
      method: 'POST',
      data: JSON.stringify(payload),
      contentType: 'application/json',
      headers: token ? { 'X-CSRF-TOKEN': token } : {},
    })
      .done(function (res1) {
        console.log('Demande enregistrée:', res1);

        // 2. Fetch Stock After Save
        const fetchStockPayload = {
        demandeur_id: payload.demandeur_id,
        lignes: payload.lignes.map(l => ({ id: l.id }))
      };

      return $.ajax({
        url: url2,
        method: 'POST',
        data: JSON.stringify(fetchStockPayload),
        contentType: 'application/json',
        headers: token ? { 'X-CSRF-TOKEN': token } : {},
      });
      })
      .done(function (res2) {
        const stocks = res2.stocks || [];
        console.log("All stocks received:", stocks);

        const sortieLines = [];
        const commandeLines = [];

        payload.lignes.forEach((line) => {

          const produitId = Number(line.id);
          const requestedQty = parseFloat(line.quantity);

          // DEBUG LOG
          console.log("Checking produit ID:", produitId, "Requested:", requestedQty);

          const stockEntry = stocks.find((s) => Number(s.produit_id) === produitId);

          const stockQty = stockEntry ? parseFloat(stockEntry.quantity) : 0;

          console.log("Stock entry:", stockEntry, "Stock quantity:", stockQty);

          if (stockQty >= requestedQty) {
            sortieLines.push({ ...line, quantity: requestedQty });
          } else if (stockQty > 0) {
            sortieLines.push({ ...line, quantity: stockQty });
            commandeLines.push({ ...line, quantity: requestedQty - stockQty });
          } else {
            commandeLines.push({ ...line, quantity: requestedQty });
          }
        });

        renderSortieTable(sortieLines);
        renderCommandeTable(commandeLines);
        $('#ajouterDemandePatient').modal('hide');
        toastr.success('Opération terminée avec succès.');
      })
      .fail(function (err) {
        console.error('Erreur AJAX:', err);
        toastr.error("Erreur lors de l'opération.");
      })
      .always(function () {
        $btn.prop('disabled', false);
      });
  });
});



function renderSortieTable(lines) {
  const container = document.getElementById('sortiePatientBlock');
  if (!lines.length) {
    container.innerHTML = <p class="text-muted mb-0">Aucune sortie pour le moment.</p>;
    return;
  }

  container.innerHTML = 
    <table class="table table-sm table-bordered mb-0">
      <thead class="table-light">
        <tr>
          <th>Article</th>
          <th>Quantité sortie</th>
        </tr>
      </thead>
      <tbody>
        ${lines.map(line => 
          <tr>
           <td>${escapeHtml(line.label || line.id)}</td>
            <td>${line.quantity}</td>
          </tr>
        ).join('')}
      </tbody>
    </table>
  ;
}

function renderCommandeTable(lines) {
  const container = document.getElementById('commandePatientBlock');
  if (!lines.length) {
    container.innerHTML = <p class="text-muted mb-0">Aucune commande pour le moment.</p>;
    return;
  }

  container.innerHTML = 
    <table class="table table-sm table-bordered mb-0">
      <thead class="table-light">
        <tr>
          <th>ID</th>
          <th>Quantité commandée</th>
        </tr>
      </thead>
      <tbody>
        ${lines.map(line => 
          <tr>
            <td>${escapeHtml(line.label || line.id)}</td>
            <td>${line.quantity}</td>
          </tr>
        ).join('')}
      </tbody>
    </table>
  ;
}




