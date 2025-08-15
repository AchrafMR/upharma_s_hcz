$(function () {
  const $tbody = $('#articlesTableBody');
  const $composer = $tbody.find('tr:first').addClass('composer-row');

  // --- Select2 with stock fetching ---
  function initArticleSelect($el) {
    if (!$el.length || !$.fn.select2) return;

    $el.select2({
      placeholder: "CHOIX D'ARTICLE",
      allowClear: true,
      width: '100%',
      minimumInputLength: 3,
      ajax: {
        url: '/mouvement/articles/search',
        dataType: 'json',
        delay: 300,
        data: function (params) {
          const emplacementId = $('#demandeur_id').val();
          return {
            q: params.term || '',
            emplacement_id: emplacementId
          };
        },
        processResults: function (data) {
          return {
            results: data.map(r => ({
              id: r.id,
              text: r.titre,
              code: r.code,
              stock: r.stock ?? 0
            }))
          };
        },
        transport: function (params, success, failure) {
          if (this._request) this._request.abort();
          this._request = $.ajax(params);
          this._request.then(success);
          this._request.fail(function (jqXHR, textStatus, err) {
            if (textStatus !== 'abort') failure(err);
          });
          return this._request;
        }
      }
    });

    // On select, populate qtyInStock
    $el.on('select2:select', function (e) {
      const selectedData = e.params.data;
      const stock = selectedData.stock ?? 0;
      $('#qtyInStock').val(stock);
    });
  }

  initArticleSelect($composer.find('select.article-select, #articleSelectAjout'));

  function renumberRows() {
    $tbody.find('tr.locked-row').each(function (i) {
      $(this).find('.row-index').text(i + 1);
    });
  }

  function getComposerQty() {
    const $qtyInput = $composer.find('.qty, .quantite, [name="quantite"], #quantite').first();
    const raw = ($qtyInput.val() ?? '').toString().trim();
    const qty = Number(raw.replace(',', '.'));
    return { qty, $qtyInput };
  }

  function getComposerStockQty() {
    const $stockInput = $composer.find('#qtyInStock');
    const stock = Number(($stockInput.val() ?? '0').trim());
    return { stock, $stockInput };
  }

  function syncLines() {
    const lines = [];
    $tbody.find('tr.locked-row').each(function () {
      const $tr = $(this);
      const articleId = $tr.find('input.hidden-article-id').val();
      const label = $tr.find('.locked-article-label').text();
      const qty = Number($tr.find('input.hidden-qty').val());
      const stock = Number($tr.find('input.hidden-qtyInStock').val());
      if (articleId && Number.isFinite(qty) && qty > 0) {
        lines.push({ article_id: articleId, quantite: qty, stock, label });
      }
    });
    window.articleLines = lines;
  }

  function validateComposer() {
    const $sel = $composer.find('select.article-select, #articleSelectAjout');
    const articleId = $sel.val();
    const { qty, $qtyInput } = getComposerQty();

    if (!articleId) {
      (window.toastr ? toastr.error("Choisissez un article.") : alert("Choisissez un article."));
      $sel.focus();
      return false;
    }
    if (!Number.isFinite(qty) || qty <= 0) {
      (window.toastr ? toastr.error("Quantité invalide.") : alert("Quantité invalide."));
      $qtyInput.focus();
      return false;
    }
    return true;
  }

  function articleAlreadyAdded(articleId) {
    const idStr = String(articleId);
    return $tbody.find('tr.locked-row input.hidden-article-id').filter(function () {
      return String($(this).val()) === idStr;
    }).length > 0;
  }

  function buildLockedRow(articleId, articleText, qty, stockQty) {
  return $(`
    <tr class="article-row locked-row">
      <td class="row-index"></td>
      <td>
        <span class="locked-article-label" data-title="${articleText}">${articleText}</span>
        <input type="hidden" class="hidden-article-id" name="article_id[]" value="${articleId}">
      </td>
      <td>
        <input type="number" class="form-control qty" value="${qty}" disabled>
        <input type="hidden" class="hidden-qty" name="quantite[]" value="${qty}">
      </td>
      <td>
        <input type="number" class="form-control qtyInStock" value="${stockQty}" disabled>
        <input type="hidden" class="hidden-qtyInStock" name="qtyInStock[]" value="${stockQty}">
      </td>
      <td class="text-nowrap">
        <button type="button" class="btn btn-link p-0 text-danger remove-article" title="Supprimer">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `);
}


  // Add article button click
  $(document).on('click', '.add-article, #addArticleAjout', function (e) {
    e.preventDefault();
    if (!validateComposer()) return;

    const $sel = $composer.find('select.article-select, #articleSelectAjout');
    const id = $sel.val();

    const selectedData = $sel.select2('data')[0] || {};
    const label = selectedData.text || '';
    const stockQty = selectedData.stock ?? 0;

    if (articleAlreadyAdded(id)) {
      (window.toastr ? toastr.warning("Cet article est déjà ajouté.") : alert("Cet article est déjà ajouté."));
      return;
    }

    const { qty } = getComposerQty();
    const $locked = buildLockedRow(id, label, qty, stockQty);
    const $lastLocked = $tbody.find('tr.locked-row:last');
    if ($lastLocked.length) $lastLocked.after($locked);
    else $composer.after($locked);

    $sel.val(null).trigger('change');
    $composer.find('.qty, .quantite, [name="quantite"], #quantite').val('');
    $composer.find('#qtyInStock').val('');

    renumberRows();
    syncLines();
  });

  $(document).on('click', '.remove-article', function (e) {
    e.preventDefault();
    $(this).closest('tr.locked-row').remove();
    renumberRows();
    syncLines();
  });

  $(document).on('change', '#articlesTableBody .locked-row input', syncLines);

  // Clear on magasin change
  $(document).on('change', '#demandeur_id', function () {
    $tbody.find('tr.locked-row').remove();
    const $sel = $composer.find('select.article-select, #articleSelectAjout');
    $sel.val(null).trigger('change');
    $composer.find('.qty, .quantite, [name="quantite"], #quantite').val('');
    $composer.find('#qtyInStock').val('');
    renumberRows();
    syncLines();
    
  });

  // Initial
  renumberRows();
  syncLines();
});
