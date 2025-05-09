$(document).ready(function () {
    // DataTable init
    $('#salesTable').DataTable({
      lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
      autoWidth: false
    });

    // Dropdown toggle logic (exact same as users)
    $("body").on("click", ".menuActions", function (e) {
      $(".divMenu").hide(); // hide all
      const id = $(this).attr("id");
      $("#divMenu" + id).toggle(); // toggle clicked one
      e.stopPropagation();
    });

    $(document).on("click", function () {
      $(".divMenu").hide();
    });
  });