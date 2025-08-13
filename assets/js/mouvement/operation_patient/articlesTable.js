$(function () {
  const $tbody = $('#articlesTableBody');

  // mark first row as the composer (editable row)
  const $composer = $tbody.find('tr:first').addClass('composer-row');

  // --- Select2 remote search (≥3 chars, debounce, abort) for composer select ---
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
          return { q: params.term || '' };
        },
        processResults: function (data) {
          // server returns: [{id, code, titre}, ...]
          return {
            results: data.map(r => ({
              id: r.id,
              text: `${r.code} — ${r.titre}`
            }))
          };
        },
        // abort previous request if user keeps typing
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
  }

  // init ONLY the composer row select (supports id or class)
  initArticleSelect($composer.find('select.article-select, #articleSelectAjout'));

  // --- numbering: number only locked rows (exclude composer) ---
  function renumberRows() {
    $tbody.find('tr.locked-row').each(function (i) {
      $(this).find('.row-index').text(i + 1);
    });
  }

  // --- read qty from composer robustly ---
  function getComposerQty() {
    const $qtyInput = $composer.find('.qty, .quantite, [name="quantite"], #quantite').first();
    const raw = ($qtyInput.val() ?? '').toString().trim();
    const qty = Number(raw.replace(',', '.'));
    return { qty, $qtyInput };
  }

  // --- collect added lines into a global array ---
  function syncLines() {
    const lines = [];
    $tbody.find('tr.locked-row').each(function () {
      const $tr = $(this);
      const articleId = $tr.find('input.hidden-article-id').val();
      const label     = $tr.find('.locked-article-label').text();
      const qty       = Number($tr.find('input.hidden-qty').val());
      if (articleId && Number.isFinite(qty) && qty > 0) {
        lines.push({ article_id: articleId, quantite: qty, label });
      }
    });
    window.articleLines = lines; // use this when submitting
  }

  // --- validate composer before adding ---
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

  // --- duplicate detection (no UI changes) ---
  function articleAlreadyAdded(articleId) {
    const idStr = String(articleId);
    return $tbody.find('tr.locked-row input.hidden-article-id').filter(function () {
      return String($(this).val()) === idStr;
    }).length > 0;
  }

  // --- build a locked row (keep your exact design) ---
  function buildLockedRow(articleId, articleText, qty) {
    const $row = $(`
      <tr class="article-row locked-row">
        <td class="row-index"></td>
        <td>
          <span class="locked-article-label">${articleText}</span>
          <input type="hidden" class="hidden-article-id" name="article_id[]" value="${articleId}">
        </td>
        <td>
          <input type="number" class="form-control qty" value="${qty}" disabled>
          <input type="hidden" class="hidden-qty" name="quantite[]" value="${qty}">
        </td>
        <td class="text-nowrap">
          <button type="button" class="btn btn-link p-0 text-danger remove-article" title="Supprimer">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `);
    return $row;
  }

  // --- ADD ARTICLE ---
  $(document).on('click', '.add-article, #addArticleAjout', function (e) {
    e.preventDefault();
    if (!validateComposer()) return;

    const $sel = $composer.find('select.article-select, #articleSelectAjout');
    const id   = $sel.val();
    const label =
      $sel.find('option:selected').text() ||
      ($sel.data('select2')?.data()?.[0]?.text || '');

    // DUPLICATE CHECK
    if (articleAlreadyAdded(id)) {
      (window.toastr ? toastr.warning("Cet article est déjà ajouté.") : alert("Cet article est déjà ajouté."));
      return;
    }

    const { qty } = getComposerQty();
    const $locked = buildLockedRow(id, label, qty);
    const $lastLocked = $tbody.find('tr.locked-row:last');
    if ($lastLocked.length) $lastLocked.after($locked);
    else $composer.after($locked);

    // clear composer
    if ($sel.data('select2')) $sel.val(null).trigger('change');
    else $sel.val('');
    $composer.find('.qty, .quantite, [name="quantite"], #quantite').val('');

    renumberRows();
    syncLines();
  });

  // --- DELETE a locked row ---
  $(document).on('click', '.remove-article', function (e) {
    e.preventDefault();
    $(this).closest('tr.locked-row').remove();
    renumberRows();
    syncLines();
  });

  $(document).on('change', '#articlesTableBody .locked-row input', syncLines);

  // initial state
  renumberRows();
  syncLines();
});
