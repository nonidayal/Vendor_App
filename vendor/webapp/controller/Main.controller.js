sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vendor.controller.Home", {
            onInit: function () {
                this.getView().byId("DRS2").setVisible(false);

            },
            onDetailPress() {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Detail");
            },
            onDateRangeSelect(oEvent) {
                if (oEvent.getSource().getSelectedIndex() === 3) {
                    this.getView().byId("DRS2").setVisible(true);
                } else {
                    this.getView().byId("DRS2").setVisible(false);
                }
            }
        });
    });
