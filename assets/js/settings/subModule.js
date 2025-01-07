$(document).ready( function () {

  $("#module").select2();
  $("#moduleUpd").select2();
  

    $('#subModulesTable').DataTable({
      lengthMenu: [
        [15, 25, 50, -1],
        [15, 25, 50, 'All'],
    ],
      
      "autoWidth": false

  });




  $("body").on("click", ".saveAddSubModule" , function(){
    var route = $("#routeName").val();
    var moduleName = $("#module").val();
    var nom = $("#subModuleName").val();

    if(nom == ""){
      $("#subModuleName").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#subModuleName").attr('style', "border: 1px solid #gray !important");
    }
    if(route == ""){
      $("#routeName").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#routeName").attr('style', "border: 1px solid #gray !important");
    }
    if(moduleName == ""){
      $("#select2-module-container").parent().css("border","1px solid #eb0000");

    }
    else{
        $("#select2-module-container").parent().css("border","1px solid lightgray ");

    }
    if(nom != "" && route != "" && moduleName != ""){
      const l = ladda.create(document.activeElement);

      l.start();

                  $.ajax({
                  url: "addSubModule",
                  method: "POST",
                  data:{
                      route: route,
                      module:moduleName,
                      nom:nom,
                  },
                  success: function(data){
                      l.stop();
                      

                      if ( $.fn.dataTable.isDataTable("#subModulesTable") ) {
                        $('#subModulesTable').DataTable().clear().destroy();
                    }

                    $("#listSubModules").html(data)


                    $("#subModulesTable").DataTable({
                      lengthMenu: [
                        [15, 25, 50, -1],
                        [15, 25, 50, 'All'],
                    ],
                      "autoWidth": false
                    })

                    $("#closeAddSubModule").click();
                    toastr.success("Sous module ajouté avec success")
                  },
                  error: function(data){
                    toastr.error("Erreur")
                    l.stop()
                  }
                })
    }


  })

  $("body").on("click" , ".btnUpdateSubModule" , function(){
    var id = $(this).attr("id");

    var idSubModule = id.slice(13); 
    
    $.ajax({
     url: "findSubModule",
     method: "POST",
     data:{
      idSubModule: idSubModule,
     },
     success: function(data){
      
       $("#idSubModuleUpd").val(data.id);
       $("#routeSubModuleUpd").val(data.route)
       $("#nomSubModuleUpd").val(data.nom)
       $("#moduleUpd").val(data.module).trigger("change")


       $("#updateSubModule").modal('show');
     }
   })
 })

 $("body").on("click", ".saveUpdateSubModule" , function(){
  var idSubModule = $("#idSubModuleUpd").val()
  var route = $("#routeSubModuleUpd").val();
  var moduleName = $("#moduleUpd").val();
  var nom = $("#nomSubModuleUpd").val();

  if(nom == ""){
    $("#routeSubModuleUpd").attr('style', "border: 1px solid #eb0000 !important");

  }
  else{
    $("#routeSubModuleUpd").attr('style', "border: 1px solid #gray !important");
  }
  if(route == ""){
    $("#nomSubModuleUpd").attr('style', "border: 1px solid #eb0000 !important");

  }
  else{
    $("#nomSubModuleUpd").attr('style', "border: 1px solid #gray !important");
  }
  if(moduleName == ""){
    $("#select2-moduleUpd-container").parent().css("border","1px solid #eb0000");

  }
  else{
      $("#select2-moduleUpd-container").parent().css("border","1px solid lightgray ");

  }
  if(nom != "" && route != "" && moduleName != ""){
    const l = ladda.create(document.activeElement);

    l.start();

                $.ajax({
                url: "updateSubModule",
                method: "POST",
                data:{
                    idSubModule:idSubModule,
                    route: route,
                    module:moduleName,
                    nom:nom,
                },
                success: function(data){
                    l.stop();
                    

                    if ( $.fn.dataTable.isDataTable("#subModulesTable") ) {
                      $('#subModulesTable').DataTable().clear().destroy();
                  }

                  $("#listSubModules").html(data)


                  $("#subModulesTable").DataTable({
                    lengthMenu: [
                      [15, 25, 50, -1],
                      [15, 25, 50, 'All'],
                  ],
                    "autoWidth": false
                  })

                  $("#closeUpdateSubModule").click();
                  toastr.success("Sous module modifié avec success")
                },
                error: function(data){
                  toastr.error("Erreur")
                  l.stop()
                }
              })
  }


})

$("body").on("click", ".activateSubModule" , function(){
  var id = $(this).attr("data-id");

  // alert(id);
  $.ajax({
    url: "activateSubModule",
    method: "POST",
    data:{
        idSubModule: id,
    },
    success: function(data){
      if ( $.fn.dataTable.isDataTable("#subModulesTable") ) {
        $('#subModulesTable').DataTable().clear().destroy();
    }

    $("#listSubModules").html(data.html);

    $("#subModulesTable").DataTable({
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