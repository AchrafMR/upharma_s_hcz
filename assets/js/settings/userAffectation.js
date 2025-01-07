const { Toaster } = require("react-hot-toast");

$(document).ready( function () {


  // $("select").select2();

  // var userTable = $('#myTable').DataTable({
  //     columnDefs: [ {
  //         orderable: false,
  //         className: 'select-checkbox',
  //         targets:   0
  //     } ],
  //     select: {
  //         style:    'os',
  //         selector: 'td:first-child'
  //     },
  //     lengthMenu: [
  //       [15, 25, 50, -1],
  //       [15, 25, 50, 'All'],
  //   ], 
  //     autoWidth: false
  // } );

  // $("#usersCheckAll").click(function(){
  //     $('input:checkbox').not(this).prop('checked', this.checked);
      
  // });


$("body").on("click",".menu-item", function(){
    var id = $(this).attr('id');
    $("body #subMenu"+id).toggle("3s");
  })

  $("body").on("click",".subMenu-item", function(){

    var id = $(this).attr('id');
    $("body #action"+id).toggle("3s");
  })

  $("body").on("click","#myTable tbody tr", function(){
      $("#myTable tbody tr").removeClass("colorRow")
      $(this).toggleClass("colorRow");
  })

  $("body").on("click",".affectUser",function(){
      var idUser = $(".colorRow").attr("id");
      var idSite = $("#dossier").val();
      // alert(idSite);

      if(idUser){

        $.ajax({
          type: "POST",
          url:"userActions",
          data:{
            idUser: idUser,
            idSite:idSite,
          },
          success:  function(data){
            $("#actionsAffectedToUser").empty()
            $('#dossier').val('').trigger('change');
            $("#affectUser").modal("show");
            // $("#userActions").html(data);
            // $("#showActions").modal("show");
          },
          error: function(){
            toastr.error("ERROR !")
          }
        })
      }
      else{
        toastr.warning("Choisir un utilisateur!")
      }


  })


  $("body").on("click",".saveAffectButton",function(){
    // var users = [];
    var checkedActions = [];
    var uncheckedActions = [];
    var idUser = $(".colorRow").attr("id");
    var idSite = $("#dossier").val();
    // alert(idSite)
    $('input.checkboxAction:checkbox:checked').each(function () {
      checkedActions.push($(this).attr('id').slice(12)); 
    });

    $('input.checkboxAction:checkbox:not(:checked)').each(function () {
        uncheckedActions.push($(this).attr('id').slice(12)); 
    });

    // var jsonUsers = JSON.stringify(users);
    var jsonCheckedActions = JSON.stringify(checkedActions);
    var jsonUncheckedActions = JSON.stringify(uncheckedActions);

    const l = ladda.create(document.activeElement);

    l.start();

    $.ajax({
          type: "POST",
          url: "affectUser",
          data: {
            idUser:idUser,
            idSite:idSite,
            jsonCheckedActions: jsonCheckedActions,
            jsonUncheckedActions: jsonUncheckedActions,
          }, 
          
          success: function(data){
            toastr.success(data.affected + " AFFECTE - " + data.notAffected + " NON AFFECTE");
            l.stop();

          },
          error:function(){
            toastr.error("ERROR !")
            l.stop();
          }
      });

  })

  $("body").on("click","#btn_affectUser", function(e){

    var idUser = $(".colorRow").attr("id");

    if(idUser){
      $("#actionsAffectedToUser").empty()
      $('#dossier').val('').trigger('change');
      $("#affectUser").modal("toggle");
    }
    else{
      toastr.info("Selectionez un utilisateur svp !");
    }

  })

  $("body").on("change","#dossier", function(){

    if($(this).val() != ""){

        $.ajax({
          type: "POST",
          url: "userActions",
          data: {
            idUser: $(".colorRow").attr("id"),
            idSite: $(this).val(),
          }, 
          
          success: function(data){
            // alert("zakaria")
            $("#actionsAffectedToUser").empty().append(data);
          },
          error:function(){
          toastr.error("ERROR !");
    
          }
      });
    }
  })

  var id_user;

  var conventionTable = $("#convention_table").DataTable({
      language: {
        "url": window.frenchJsonUrl
      },
      columnDefs: [
        { orderable: false, targets: 0 }
      ],
      lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Tous"]],
      pageLength: 10
  });


  $("body").on("click",".assignConvention",function(){
    id_user = $(".colorRow").attr("id");
    // alert(id_user);
  
    if(id_user){
        $.ajax({
            url: "findUser",
            method: "POST",
            data: {
                idUser: id_user,
                convention: true,
            },
            success: function(result) {
                data = result.data;

                $('#user_name').val(data.username);
                $('#user_nom').val(data.name);
                $('#user_profession').val(data.professionDescription);
                
                
                $('#convention_table tbody').empty();

                if ($.fn.DataTable.isDataTable('body #convention_table')) {
                  $('#convention_table').DataTable().destroy();
                }
          
                $('body #list_convention').empty().append(result.html);
                
                conventionTable = $("#convention_table").DataTable({
                    language: {
                      "url": window.frenchJsonUrl
                    },
                    columnDefs: [
                      { orderable: false, targets: 0 }
                    ],
                    lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Tous"]],
                    pageLength: 10
                });

                updateDataTableSelectAllCtrl(conventionTable);

                $("#assign_convention").modal("show");
            },
            error: function(xhr, status, error) {
                toastr.error(xhr.responseText);
            }
        });
    }
    else{
      toastr.info("Choisir un utilisateur!")
    }

  })

  $('#convention_table tbody').on('change', 'input[type="checkbox"]:enabled', function() {
    var $row = $(this).closest('tr');

    if (this.checked) {
      $row.addClass('colorRow');
    } else {
      $row.removeClass('colorRow');
    }
    
    // Update state of "Select all" control
    updateDataTableSelectAllCtrl(conventionTable);
  })

  $('#convention_table tbody').on('click', 'tr', function(event) {
    // Check if the target element is not a checkbox
    if (event.target.type !== 'checkbox') {
        var $checkbox = $(this).find('input[type="checkbox"]:enabled');
        $checkbox.prop('checked', !$checkbox.prop('checked')).trigger('change');
    }
  });

  // Handle click on "Select all" checkbox
  $('#convention_table thead').on('change', 'input[name="select_all"]', function() {
    var checked = this.checked;
    $('#convention_table tbody input[type="checkbox"]:enabled').each(function() {
        if (!this.disabled) {
        if (this.checked !== checked) {
            $(this).prop('checked', checked).trigger('change');
        }
        }
    });
  });

  function updateDataTableSelectAllCtrl(table) {
    var $table = table.table().node();
    var $chkbox_all = $('tbody input[type="checkbox"]:not(:disabled)', $table);
    var $chkbox_checked = $('tbody input[type="checkbox"]:checked:not(:disabled)', $table);
    var chkbox_select_all = $('thead input[name="select_all"]', $table).get(0);

    // If none of the checkboxes are checked
    if ($chkbox_checked.length === 0) {
        chkbox_select_all.checked = false;
        if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = false;
        }
    } else if ($chkbox_checked.length === $chkbox_all.length) {
        // If all checkboxes are checked
        chkbox_select_all.checked = true;
        if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = false;
        }
    } else {
        // If some checkboxes are checked
        chkbox_select_all.checked = true;
        if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = true;
        }
    }
  }

  $("body").on("click",".saveAssignConvention",function(){

    const la = ladda.create(document.activeElement);
    la.start();

    var conventionIds = [];

    $("#convention_table tbody tr").each(function() {
        var checkbox = $(this).find('input[type="checkbox"]');
        
        if (checkbox.is(':checked')) {
            conventionIds.push(checkbox.val());
        }
    });
        
    var userConventionData = {
      conventionIds: conventionIds,
      id_user: id_user
    };

    $.ajax({
      url: Routing.generate('app_assign_convention'),
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(userConventionData),
      success: function (result) {
        la.stop();

        toastr.success(result);

        $("#assign_convention").modal("hide");

      },
      error: function (jqXHR, textStatus, errorThrown) {
        la.stop();
        return toastr.error(jqXHR.responseText);
      },
    });
  })

  





  // var conventionTable = $('#convention_table').DataTable({
  //     language: {
  //         url: window.frenchJsonUrl,
  //         processing: '<i style="color:#508884; margin-top:100px !important; font-size:25px !important;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span> ',
  //     },
  //     lengthMenu: [
  //       [10, 50, 100, 200],
  //       [10, 50, 100, 200],
  //   ],
  //     processing: true,
  //     serverSide: true,
  //     ajax: {
  //         url: Routing.generate('app_fetch_convention'),
  //         data: function(d) {
  //             d.draw = d.draw || 0;
  //             d.start = d.start || 0;
  //             d.length = d.length || 15;
  //             // user convention filter
  //             d.user_filter = id_user;
  //         },
  //         beforeSend: function () {
  //           if (conventionTable.hasOwnProperty("settings")) {
  //             var settings = conventionTable.settings();
  //             if (settings[0].jqXHR) {
  //               settings[0].jqXHR.abort();
  //             }
  //           }
  //         }, 
  //     },
  //     order: [[1, 'asc']],
  //     columns: [
  //         {
  //           data: 'id',
  //           render: function(data, type, row) {
  //               if (type === 'display') {
  //                   if (row.hasConvention) {
  //                       return '<input type="checkbox" checked value="' + data + '">';
  //                   } else {
  //                       return '<input type="checkbox" value="' + data + '">';
  //                   }
  //               }
  //               return data;
  //           },
  //           orderable: false,
  //           searchable: false
  //         },
  //         { name: "org.id", data: "id" },
  //         { name: "org.nom", data: "nom" },
  //     ],
  //     autoWidth: true
  // });



    // // Initialize the rows_selected array
    // var rows_selected = [];

    // // Handle click on table row
    // $('#convention_table tbody').on('click', 'tr', function(event) {
    //     // Check if the target element is not a checkbox, not inside .menuActions, and not the last td
    //     if (event.target.type !== 'checkbox' && !$(event.target).closest('.menuActions').length && !$(event.target).closest('td').is(':last-child')) {
    //         var $checkbox = $(this).find('input[type="checkbox"]:enabled');
    //         $checkbox.prop('checked', !$checkbox.prop('checked')).trigger('change');
    //     }
    // });

    // // Handle change on checkbox
    // $('#convention_table tbody').on('change', 'input[type="checkbox"]:enabled', function() {
    //   var $row = $(this).closest('tr');
    //   var data = conventionTable.row($row).data();
    //   var rowId = data.id;

    //   if (this.checked) {
    //     // Add the organism ID to the selectedConventions array
    //     rows_selected.push(rowId);
    //     $row.addClass('colorRow');
    //   } else {
    //     // Remove the organism ID from the selectedConventions array
    //     var index = rows_selected.indexOf(rowId);
    //     if (index !== -1) {
    //       rows_selected.splice(index, 1);
    //     }
    //     $row.removeClass('colorRow');
    //   }

    //   // Assign or unassign the selected organism to the user
    //   updateConventionAssignment(rowId, this.checked);
    // });

    // var conventionAjaxRequest;

    // function updateConventionAssignment(conventionId, checked) {
      // var userConventionData = {
      //   selectedConvention: conventionId,
      //   id_user: id_user,
      //   checked: checked
      // };

    //   if (conventionAjaxRequest) {
    //     conventionAjaxRequest.abort();
    //   }

      // conventionAjaxRequest = $.ajax({
      //   url: Routing.generate('app_assign_convention'),
      //   method: 'POST',
      //   contentType: 'application/json',
      //   data: JSON.stringify(userConventionData),
      //   success: function(response) {
      //     console.log('Convention assignment updated successfully.');
      //   },
      //   error: function(xhr, status, error) {
      //     console.error('Error updating convention assignment:', error);
      //   }
      // });
    // }


    var caisseTable = $("#caisse_table").DataTable({
      language: {
        "url": window.frenchJsonUrl
      },
    });
    
    $("body").on("click",".assignCaisse",function(){
      id_user = $(".colorRow").attr("id");
      // alert(id_user);
    
      if(id_user){
          $.ajax({
              url: "findUser",
              method: "POST",
              data: {
                  idUser: id_user,
                  caisse: true,
              },
              success: function(result) {
                  data = result.data;
                  $('#user_name_caisse').val(data.username);
                  $('#user_nom_caisse').val(data.name);
                  $('#user_profession_caisse').val(data.professionDescription);

                  if ($.fn.DataTable.isDataTable('body #caisse_table')) {
                    $('#caisse_table').DataTable().destroy();
                  }
            
                  $('body #list_caisse').empty().append(result.html);
            
                  caisseTable = $("#caisse_table").DataTable({
                    language: {
                      "url": window.frenchJsonUrl
                    },
                  });

                  $("#caisse_table tbody tr").each(function() {
                      if ($(this).find('input[type="checkbox"]').is(':checked')) {
                          $(this).addClass('colorRow');
                      }
                  });

                  $("#assign_caisse").modal("show");
              },
              error: function(xhr, status, error) {
                  toastr.error(xhr.responseText);
              }
          });
  
      }
      else{
        toastr.info("Choisir un utilisateur!")
      }
    })

    $("body").on("click", "#caisse_table tbody tr", function () {
      
        if ($(this).hasClass("colorRow")) {
          $(this).removeClass("colorRow");
          $(this).find('input[type="checkbox"]').prop("checked", false);
        } else {
          caisseTable.$('tr').removeClass("colorRow");
          caisseTable.$('input[type="checkbox"]').prop("checked", false);
          
          $(this).addClass("colorRow");
          $(this).find('input[type="checkbox"]').prop("checked", true);
        }
    })



    $("body").on("click", ".saveAssignCaisse", function () {

      const la = ladda.create(document.activeElement);
      la.start();

      let selectedCaisse = caisseTable.rows('.colorRow').data().length > 0 ? caisseTable.rows('.colorRow').data()[0][1] : null;

      $.ajax({
        type: "POST",
        url: Routing.generate("app_assign_caisse"),
        contentType: 'application/json',
        data: JSON.stringify({ 
            selectedCaisse: selectedCaisse,
            id_user: id_user,
        }),
        processData: false,
        contentType: false,
        success: function (result) {
          la.stop();
  
          toastr.success(result);

          $("#assign_caisse").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {
          la.stop();
          return toastr.error(jqXHR.responseText);
        },
      });
    });

    $("body").on("click",".duplicate",function(){
      id_user = $(".colorRow").attr("id");
      // alert(id_user);
    
      if(id_user){
          $("#duplicate_user").modal("show");       
      }
      else{
        toastr.info("Choisir un utilisateur!")
      }
  
    });



    $("body").on("submit", "#duplicateUserForm", function (e) {
      e.preventDefault();
      id_user = $(".colorRow").attr("id");
      
      var username = $("#duplicated_username").val();
      var name = $("#duplicated_nom").val();
      var password = $("#duplicated_password").val();
    
      if(id_user){

          var userData = {
            id_user: id_user,
            username: username,
            name: name,
            password: password
          };

          const l = ladda.create(document.activeElement);
          l.start();

          $.ajax({
            url: Routing.generate('app_duplicate_user'),
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData),
              success: function(data) {
                  toastr.success("Utilisateur dupliqué avec succès");
                  l.stop();
                  $("#duplicate_user").modal("hide");
                  $("#duplicated_username").val("");
                  $("#duplicated_nom").val("");
                  $("#duplicated_password").val("");  

                  if ( $.fn.dataTable.isDataTable("#myTable") ) {
                    $('#myTable').DataTable().clear().destroy();
                  }
      
                  $("#listUsers").html(data.html);
      
                  $("#myTable").DataTable({
                    lengthMenu: [
                      [15, 25, 50, -1],
                      [15, 25, 50, 'All'],
                  ],
                    "autoWidth": false
                  })
                
              },
              error: function(xhr, status, error) {
                  toastr.error(xhr.responseText);
                  l.stop();
              }
          });
          
      }
      else{
        toastr.info("Choisir un utilisateur!")
      }
  
    });









  
});


