sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "demo/demand/resourcedemand/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter) {
        "use strict";

        return Controller.extend("demo.demand.resourcedemand.controller.Home", {
            formatter:formatter,
            onInit: function () {
                
            }
        });
    });
