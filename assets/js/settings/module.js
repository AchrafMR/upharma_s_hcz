$(document).ready( function () {

    $('#modulesTable').DataTable({
      lengthMenu: [
        [15, 25, 50, -1],
        [15, 25, 50, 'All'],
    ],
      
      "autoWidth": false

  });


  $("body").on("click", ".saveAddModule" , function(){
    var route = $("#route").val();
    var icon = $("#icon").val();
    var nom = $("#nomModule").val();

    if(nom == ""){
      $("#nomModule").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#nomModule").attr('style', "border: 1px solid #gray !important");
    }
    if(route == ""){
      $("#route").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#route").attr('style', "border: 1px solid #gray !important");
    }
    if(nom != "" && route != ""){
      const l = ladda.create(document.activeElement);

      l.start();

                  $.ajax({
                  url: "addModule",
                  method: "POST",
                  data:{
                      route: route,
                      icon:icon,
                      nom:nom,
                  },
                  success: function(data){
                      l.stop();
                      

                      if ( $.fn.dataTable.isDataTable("#modulesTable") ) {
                        $('#modulesTable').DataTable().clear().destroy();
                    }

                    $("#listModules").html(data)


                    $("#modulesTable").DataTable({
                      lengthMenu: [
                        [15, 25, 50, -1],
                        [15, 25, 50, 'All'],
                    ],
                      "autoWidth": false
                    })

                    $("#closeAddModule").click();
                    toastr.success("Module ajouté avec success")
                  },
                  error: function(data){
                    toastr.error("Erreur")
                    l.stop()
                  }
                })
    }


  })

  $("body").on("click" , ".btnUpdateModule" , function(){
     var  id = $(this).attr("id")

     var idModule = id.slice(13)

     console.log(idModule)
     $.ajax({
      url: "findModule",
      method: "POST",
      data:{
          idModule: idModule,
      },
      success: function(data){
        $("#idModule").val(data.id);
        $("#routeUpdate").val(data.route)
        $("#iconUpdate").val(data.icon)
        $("#nomModuleUpdate").val(data.nom)

        $("#updateModule").modal('show');
      }
    })
  })

  $("body").on("click" , ".saveUpdateModule" , function(){
    var route = $("#routeUpdate").val();
    var icon = $("#iconUpdate").val();
    var nom = $("#nomModuleUpdate").val();
    var idModule = $("#idModule").val();

    if(nom == ""){
      $("#nomModuleUpdate").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#nomModuleUpdate").attr('style', "border: 1px solid #gray !important");
    }
    if(route == ""){
      $("#routeUpdate").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#routeUpdate").attr('style', "border: 1px solid #gray !important");
    }
    if(nom != "" && route != ""){
      const l = ladda.create(document.activeElement);

      l.start();

                  $.ajax({
                  url: "updateModule",
                  method: "POST",
                  data:{
                      idModule:idModule,
                      route: route,
                      icon:icon,
                      nom:nom,
                  },
                  success: function(data){
                      l.stop();
                      

                      if ( $.fn.dataTable.isDataTable("#modulesTable") ) {
                        $('#modulesTable').DataTable().clear().destroy();
                    }

                    $("#listModules").html(data)


                    $("#modulesTable").DataTable({
                      lengthMenu: [
                        [15, 25, 50, -1],
                        [15, 25, 50, 'All'],
                    ],
                      "autoWidth": false
                    })

                    $("#closeUpdateModule").click();
                    toastr.success("Module modifié avec success")
                  },
                  error: function(data){
                    toastr.error("Erreur")
                    l.stop()
                  }
                })
    }
  })

  $("body").on("click", ".activateModule" , function(){
    var id = $(this).attr("data-id");

    $.ajax({
      url: "activateModule",
      method: "POST",
      data:{
          idModule: id,
      },
      success: function(data){
        if ( $.fn.dataTable.isDataTable("#modulesTable") ) {
          $('#modulesTable').DataTable().clear().destroy();
      }

      $("#listModules").html(data.html);

      $("#modulesTable").DataTable({
        lengthMenu: [
          [15, 25, 50, -1],
          [15, 25, 50, 'All'],
      ],
        "autoWidth": false
      })

      toastr.success(data.message);
        }
      })
    
  })






})