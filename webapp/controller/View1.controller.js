sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("employee.controller.View1", {
        onInit() {
            var oViewModel = new JSONModel({
				requestor: {
					LANID: "11111",
					name: "ABCDE",
					email: "ABCDE.COM",
					pernr: "22222",
					phone: "99999",
					LOB: "AAAA",
					subArea: "ACAC",
				},			
			});

			this.getView().setModel(oViewModel, "globalModel");
        }
    });
});