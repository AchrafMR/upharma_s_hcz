document.addEventListener("DOMContentLoaded", function () {
    // Get current path and highlight active link
    var path = window.location.pathname;
    var prefix = window.location.pathname.split('/')[1];
    if (path == '') path = 'login';

    var target = $('.sub-menu li a[href="' + path + '"]');
    var menu = $('.menuLink').prop('data-id', prefix);
    target.css("color", "white");

    // Sidebar toggle + logo switch logic
    const toggle = document.getElementById("header-toggle"),
      nav = document.getElementById("nav-bar"),
      bodypd = document.getElementById("body-pd"),
      headerpd = document.getElementById("header"),
      logoOpen = document.getElementById("logoOpen"),
      logoClosed = document.getElementById("logoClosed");

    if (toggle && nav && bodypd && headerpd && logoOpen && logoClosed) {
      // Set initial logo state
      const isOpenInit = toggle.classList.contains("fa-xmark");
      if (isOpenInit) {
        logoOpen.classList.remove("d-none");
        logoClosed.classList.add("d-none");
      } else {
        logoOpen.classList.add("d-none");
        logoClosed.classList.remove("d-none");
      }

      toggle.addEventListener("click", () => {
        toggle.classList.toggle("toggle_margin");
        nav.classList.toggle("nav_width");
        nav.classList.toggle("show-sidebar");
        toggle.classList.toggle("fa-xmark");
        bodypd.classList.toggle("body-pd");
        headerpd.classList.toggle("body-pd");

        // Update logo based on toggle icon
        const isOpenNow = toggle.classList.contains("fa-xmark");
        if (isOpenNow) {
          logoOpen.classList.remove("d-none");
          logoClosed.classList.add("d-none");
        } else {
          logoOpen.classList.add("d-none");
          logoClosed.classList.remove("d-none");
        }
      });
    }

    // Sidebar menu open/close on click
    $(".sidebarMenu").on("click", function () {
      const sidebarIsOpen = $('#nav-bar').hasClass("show-sidebar");

      if (sidebarIsOpen) {
        $(".menuList:not(.nav_link_sub)").find(".active").removeClass("active");
        $(this).toggleClass("active");

        var idModule = $(this).attr("id");
        $(".sub-menu:not(#subModule" + idModule + ")").hide("3ms");
        $("#subModule" + idModule).toggle("5ms");
        $("#subModule" + idModule).toggleClass("showing");

        $(".fa-caret-right").removeClass("rotate");

        if (!$("#subModule" + idModule).hasClass("showing")) {
          $(this).find(".fa-caret-right").addClass("rotate");
        }

        $(this).find(".fa-caret-right").toggleClass("rotate");

        let tabValue = $(this).find("span").text();
        localStorage.setItem("selectedTab", tabValue);
      }
    });
  });