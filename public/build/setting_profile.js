(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting_profile"],{

/***/ "./assets/js/settings/profile.js":
/*!***************************************!*\
  !*** ./assets/js/settings/profile.js ***!
  \***************************************/
/***/ (() => {

$(document).ready(function () {
  $("#profession").select2();
  $("body").on("click", "#saveInfoUser", function () {
    var id = $("#id").val();
    var fullName = $("#fullName").val();
    var status = $('input[name="active"]:checked').val();
    var profession = $("#profession").val();
    var la = ladda.create(document.activeElement);
    la.start();
    $.ajax({
      type: "POST",
      url: "/updateInfoUser",
      data: {
        id: id,
        fullName: fullName,
        status: status,
        profession: profession
      },
      success: function success(data) {
        la.stop();
        toastr.success("Modification fait avec succéss !");
      },
      error: function error() {
        la.stop();
        toastr.error("Erreur");
      }
    });
  });
  $("body").on("click", "#savePasswordChange", function () {
    var id = $("#id").val();
    var oldPassword = $("#currentPassword").val();
    var newPassword = $("#newPassword").val();
    var repeatNewPassword = $("#repeatNewPassword").val();
    if (!oldPassword) {
      toastr.warning("Veuillez entrer le mot de passe actuel");
    } else if (!newPassword) {
      toastr.warning("Veuillez entrer le nouveau mot de passe");
    } else if (!repeatNewPassword) {
      toastr.warning("Veuillez confirmer le nouveau mot de passe");
    } else if (newPassword != repeatNewPassword) {
      toastr.warning("Veuillez confirmer le même nouveau mot de passe");
    } else {
      var la = ladda.create(document.activeElement);
      la.start();
      $.ajax({
        type: "POST",
        url: "/updatePassword",
        data: {
          id: id,
          oldPassword: oldPassword,
          newPassword: newPassword,
          repeatNewPassword: repeatNewPassword
        },
        success: function success(data) {
          if (data == "GOOD") {
            toastr.success("Votre mot de passe à été modifié !");
          } else {
            toastr.warning(data);
          }
          la.stop();
        },
        error: function error() {
          toastr.error("Erreur");
          la.stop();
        }
      });
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/profile.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQztRQUNMQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxHQUFHLEVBQUMsaUJBQWlCO1FBQ3JCQyxJQUFJLEVBQUM7VUFDSGIsRUFBRSxFQUFDQSxFQUFFO1VBQ0xrQixXQUFXLEVBQUNBLFdBQVc7VUFDdkJDLFdBQVcsRUFBQ0EsV0FBVztVQUN2QkMsaUJBQWlCLEVBQUNBO1FBQ3BCLENBQUM7UUFDRE4sT0FBTyxFQUFFLFNBQUFBLFFBQVNELElBQUksRUFBQztVQUNyQixJQUFHQSxJQUFJLElBQUksTUFBTSxFQUFDO1lBRWhCRyxNQUFNLENBQUNGLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztVQUN0RCxDQUFDLE1BQ0c7WUFDRkUsTUFBTSxDQUFDSyxPQUFPLENBQUNSLElBQUksQ0FBQztVQUN0QjtVQUVBUixFQUFFLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUNERSxLQUFLLEVBQUMsU0FBQUEsTUFBQSxFQUFVO1VBQ2RELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQztVQUV0QlosRUFBRSxDQUFDVSxJQUFJLENBQUMsQ0FBQztRQUNYO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFJRixDQUFDLENBQUM7QUFHSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2V0dGluZ3MvcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeSggZnVuY3Rpb24gKCkge1xyXG5cclxuICAkKFwiI3Byb2Zlc3Npb25cIikuc2VsZWN0MigpO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI3NhdmVJbmZvVXNlclwiLCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGlkID0gJChcIiNpZFwiKS52YWwoKTtcclxuICAgIHZhciBmdWxsTmFtZSA9ICQoXCIjZnVsbE5hbWVcIikudmFsKCk7XHJcbiAgICB2YXIgc3RhdHVzID0gJCgnaW5wdXRbbmFtZT1cImFjdGl2ZVwiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICB2YXIgcHJvZmVzc2lvbiA9ICQoXCIjcHJvZmVzc2lvblwiKS52YWwoKTtcclxuXHJcbiAgICBjb25zdCBsYSA9IGxhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgICBsYS5zdGFydCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6XCIvdXBkYXRlSW5mb1VzZXJcIixcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgaWQ6aWQsXHJcbiAgICAgICAgZnVsbE5hbWU6ZnVsbE5hbWUsXHJcbiAgICAgICAgc3RhdHVzOnN0YXR1cyxcclxuICAgICAgICBwcm9mZXNzaW9uOnByb2Zlc3Npb25cclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGEuc3RvcCgpXHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJNb2RpZmljYXRpb24gZmFpdCBhdmVjIHN1Y2PDqXNzICFcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGEuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICB9KVxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI3NhdmVQYXNzd29yZENoYW5nZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGlkID0gJChcIiNpZFwiKS52YWwoKTtcclxuICAgIHZhciBvbGRQYXNzd29yZCA9ICQoXCIjY3VycmVudFBhc3N3b3JkXCIpLnZhbCgpO1xyXG4gICAgdmFyIG5ld1Bhc3N3b3JkID0gJChcIiNuZXdQYXNzd29yZFwiKS52YWwoKTtcclxuICAgIHZhciByZXBlYXROZXdQYXNzd29yZCA9ICQoXCIjcmVwZWF0TmV3UGFzc3dvcmRcIikudmFsKCk7XHJcblxyXG4gICAgaWYoIW9sZFBhc3N3b3JkKXtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBlbnRyZXIgbGUgbW90IGRlIHBhc3NlIGFjdHVlbFwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIW5ld1Bhc3N3b3JkKXtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBlbnRyZXIgbGUgbm91dmVhdSBtb3QgZGUgcGFzc2VcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFyZXBlYXROZXdQYXNzd29yZCl7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogY29uZmlybWVyIGxlIG5vdXZlYXUgbW90IGRlIHBhc3NlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihuZXdQYXNzd29yZCAhPSByZXBlYXROZXdQYXNzd29yZCl7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogY29uZmlybWVyIGxlIG3Dqm1lIG5vdXZlYXUgbW90IGRlIHBhc3NlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgIGNvbnN0IGxhID0gbGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgbGEuc3RhcnQoKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOlwiL3VwZGF0ZVBhc3N3b3JkXCIsXHJcbiAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICBpZDppZCxcclxuICAgICAgICAgIG9sZFBhc3N3b3JkOm9sZFBhc3N3b3JkLFxyXG4gICAgICAgICAgbmV3UGFzc3dvcmQ6bmV3UGFzc3dvcmQsXHJcbiAgICAgICAgICByZXBlYXROZXdQYXNzd29yZDpyZXBlYXROZXdQYXNzd29yZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICBpZihkYXRhID09IFwiR09PRFwiKXtcclxuXHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiVm90cmUgbW90IGRlIHBhc3NlIMOgIMOpdMOpIG1vZGlmacOpICFcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhkYXRhKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsYS5zdG9wKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIilcclxuXHJcbiAgICAgICAgICBsYS5zdG9wKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gIH0pXHJcbiAgXHJcblxyXG59KSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdDIiLCJvbiIsImlkIiwidmFsIiwiZnVsbE5hbWUiLCJzdGF0dXMiLCJwcm9mZXNzaW9uIiwibGEiLCJsYWRkYSIsImNyZWF0ZSIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdG9wIiwidG9hc3RyIiwiZXJyb3IiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwicmVwZWF0TmV3UGFzc3dvcmQiLCJ3YXJuaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==