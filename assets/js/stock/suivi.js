$(document).ready( function () {
    var previousXhr = null;
    var selectedMagasin = $("#magasin").val();

    // SCANNER LE CODE PRODUIT
    $('#scanProduitInput').focus();

    $('#scanProduitInput').on('keypress', async function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();

            const inputValue = $(this).val().trim();

            if (!inputValue) {
                window.notyf.dismissAll();
                window.notyf.error("Merci de scanner le codebarre ou bien tappez le code Produit.");
                return;
            }

            try {
                const request = await axios.post(
                    Routing.generate('app_stock_suivi_stock_details',{
                        codeProduit: inputValue})
                );
                const response = await request.data;
                console.log(response["detailProduit"])
                $("#produitDetailsModal #detailsBody").html("");
                $("#produitDetailsModal #detailsBody").html(response["detailProduit"]);
                $("select").select2();
                $('#produitMagasinsTable').DataTable({
                    pageLength: 20,
                    lengthChange: false,
                    searching: true
                });
            } catch (error) {
                console.log(error);
                if (error.response && error.response.data) {
                    const message = error.response.data.error;
                    toastr.error(message);
                } else {
                    toastr.error("Erreur lors de l'enregistrement");
                }
            }
            $("#produitDetailsModal").modal("show");
        }
    });

    // initialize datatables
    var table = $("#ProduitsTable").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: {
            url: Routing.generate("app_stock_suivi_stock_list"),
            type: "get",
            data: function (d) {
                // d.filterDate = filterValue;
                d.magasin = selectedMagasin;
            },
            beforeSend: function (jqXHR) {
                if (previousXhr) {
                    previousXhr.abort();
                }
                previousXhr = jqXHR;
            },
            dataSrc: function (json) {
                // Store actions globally for dynamic rendering
                window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
                return json.data;
            },
        },
        processing: true,
        serverSide: true,
        deferRender: true,
        responsive: true,
        columns: [
            { name: "pr.id", data: "id" },
            { name: "pr.code", data: "code" },
            { name: "pr.titre", data: "titre" },
            { name: "objCount", data: "objCount" },
            { name: 'actions', date: null, orderable: false, searchable: false, render: function (data,type, full) {
                var actionsHtml = `<div class="dropdown">
                            <i class="menuActions fa-solid fa-ellipsis-vertical" id="${full.id}">
                            </i>
                            <div class="dropdown-menu dropdown-content divMenu" id="divMenu${full.id}">`;
                            window.globalActions.forEach(function (action) {
                                actionsHtml += `
                                    <button data-id="${full.id}" class="${action.className} dropdown-item d-flex align-items-end"><i class="${action.icon} menuIcon"></i> ${action.nom}</button>`;
                            });
                    actionsHtml += '</div>';
                    return actionsHtml;
            } },
        ],
        columnDefs: [
            {
                targets: 0,
                orderable: false,
                searchable: false,
                // render: function (data, type, full, meta) {
                //     var checked = livraison_array.includes(data) ? 'checked' : '';
                //     return `<input type="checkbox" class="selectLivraison" data-id="${data}" ${checked}>`;
                // }
            },
            {
                targets: 1,
                render: function (data, type, full, meta) {
                    if (data) {
                        return `<a href="#" data-id="${full.id}" class="detailsProduit">${data}</a>`;
                    }
                    return data;
                }
            },

        ],
        language: datatablesFrench,
        initComplete: function () {
            // Prevent sorting when interacting with select in header
            $("thead .selection").on("click", function (e) {
                e.stopPropagation();
            });
        },
    });

    $("#magasin").on("change", function () {
        selectedMagasin = $(this).val();
        table.ajax.reload();
    });

    // DETAILS PRODUIT
    $('body').on('click', '.detailsProduit', async function (e) {
        e.preventDefault();

        let idProduit = $(this).attr('data-id')
        try {
            const request = await axios.post(
                Routing.generate('app_stock_suivi_stock_details',{
                    idProduit: idProduit})
            );
            const response = await request.data;
            console.log(response["detailProduit"])
            $("#produitDetailsModal #detailsBody").html("");
            $("#produitDetailsModal #detailsBody").html(response["detailProduit"]);
            $("select").select2();
             $('#produitMagasinsTable').DataTable({
                pageLength: 20,
                lengthChange: false,
                searching: true
            });
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data) {
                const message = error.response.data.error;
                toastr.error(message);
            } else {
                toastr.error("Erreur lors de l'enregistrement");
            }
        }
        $("#produitDetailsModal").modal("show");
    })
})
