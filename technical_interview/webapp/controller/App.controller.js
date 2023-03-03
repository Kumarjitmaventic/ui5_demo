sap.ui.define([
    "demo/technical/list/technicalinterview/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "demo/technical/list/technicalinterview/model/formatter",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,formatter) {
        "use strict";

        return Controller.extend("demo.technical.list.technicalinterview.controller.App", {
            formatter: formatter,
           
            onInit: function () {
                var oViewModel;
                oViewModel = new JSONModel({
                    busy : false,
                    delay : 0,
                    layout : "OneColumn",
                    previousLayout : "",
                    actionButtonsInfo : {
                        midColumn : {
                            fullScreen : false
                        }
                    }
                });
                this.setModel(oViewModel, "appView");


                var oModel =  new JSONModel({
                    isFilterBarVisible: false,
                    filterBarLabel: "",
                    delay: 0,
                    titleCount: 10,
                    noDataText: "masterListNoDataText"
                });

                this.setModel(oModel, "masterView");

                var order = [

                    {
                        "id":"000120",
                        "desc":"Project descriptions ",
                        "status":"In Progress",
                        "due_date":"10/05/2023",
                        "required":12,
                        "screening":5,
                        "selected":6,
                        "interview_date" : "15 March 2023",
                        "interview_status":"Complete"
                    },
                    {
                        "id":"000140",
                        "desc":"Project descriptions ",
                        "status":"Complete",
                        "due_date":"10/05/2023",
                        "required":10,
                        "screening":0,
                        "selected":10,
                        "interview_date" : "16 March 2023",
                        "interview_status":"On going"
                    },
                    {
                        "id":"000123",
                        "desc":"Project descriptions ",
                        "status":"In Progress",
                        "due_date":"10/06/2023",
                        "required":20,
                        "screening":2,
                        "selected":18,
                        "interview_date" : "29 May 2023",
                        "interview_status":"Pending"
                    },
                    {
                        "id":"000124",
                        "desc":"Project descriptions ",
                        "status":"In Progress",
                        "due_date":"08/12/2023",
                        "required":12,
                        "screening":5,
                        "selected":10,
                        "interview_date" :"2 August 2023",
                        "interview_status":"Pending"
                    },
                    {
                        "id":"000125",
                        "desc":"Project descriptions ",
                        "status":"Complete",
                        "due_date":"10/10/2023",
                        "required":10,
                        "screening":0,
                        "selected":10,
                        "interview_date" : "23 August 2023",
                        "interview_status":"Pending"
                    },
                    {
                        "id":"000126",
                        "desc":"Project descriptions ",
                        "status":"In Progress",
                        "due_date":"21/03/2023",
                        "required":8,
                        "screening":5,
                        "selected":6,
                        "interview_date" : "23 August 2023",
                        "interview_status":"Pending"
                    },
                    {
                        "id":"000127",
                        "desc":"Project descriptions ",
                        "status":"In Progress",
                        "due_date":"22/10/2023",
                        "required":12,
                        "screening":5,
                        "selected":6,
                        "interview_date" : "23 August 2023",
                        "interview_status":"Pending"
                    },
                    {
                        "id":"000135",
                        "desc":"Project descriptions ",
                        "status":"In Progress",
                        "due_date":"10/05/2023",
                        "required":12,
                        "screening":10,
                        "selected":6,
                        "interview_date" : "23 August 2023",
                        "interview_status":"Pending"
                    },
                    {
                        "id":"000161",
                        "desc":"Project descriptions ",
                        "status":"In Progress",
                        "due_date":"10/05/2023",
                        "required":15,
                        "screening":9,
                        "selected":6,
                        "interview_date" : "16 March 2023",
                        "interview_status":"Pending"
                    },
                    {
                        "id":"000130",
                        "desc":"Project descriptions ",
                        "status":"Complete",
                        "due_date":"13/05/2023",
                        "required":10,
                        "screening":0,
                        "selected":10,
                        "interview_date" : "16 March 2023",
                        "interview_status":"Pending"
                    }
                ]

                this.getView().getModel("masterView").setProperty("/Orders",order)
                
            }
        });
    });
