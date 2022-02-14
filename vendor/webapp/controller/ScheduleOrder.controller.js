sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vendor.controller.Detail", {
            onInit: function () {

            },
            onNavToMasterPage(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteHome");
            }
        });
    });
