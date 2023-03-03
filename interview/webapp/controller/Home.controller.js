sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "demo/interview/interview/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,formatter) {
        "use strict";

        return Controller.extend("demo.interview.interview.controller.Home", {
            formatter: formatter,
            onInit: function () {


                var oModel =  new JSONModel({
                    isFilterBarVisible: false,
                    filterBarLabel: "",
                    delay: 0,
                    titleCount: 3,
                    noDataText: "masterListNoDataText",
                    avatar : sap.ui.require.toUrl("demo/interview/interview/model/1234.png")
                });

                

                var order = [

                    {
                        "id":"875",
                        "desc":"Custom JAVA Development with Spring Boot ",
                        "status":"Inprogress",
                        "due_date":"16 March 2023",
                        "required":3,
                        "screening":2,
                        "selected":2,
                        "interview_date" : "03 Mar 2023",
                        "interview_status":"Schedule",
                        "employee":"Michael"
                    },
                    {
                        "id":"879",
                        "desc":"Functional Requiment for SAP Module FI , MM , SD",
                        "status":"Inprogress",
                        "due_date":"23 March 2023",
                        "required":8,
                        "screening":5,
                        "selected":1,
                        "interview_date" : "03 Mar 2023",
                        "interview_status":"Schedule",
                        "employee":"Michael"
                    },
                    {
                        "id":"985",
                        "desc":"Required for Project intergrating SAP Ariba",
                        "status":"New",
                        "due_date":"31 March 2023",
                        "required":2,
                        "screening":0,
                        "selected":0,
                        "interview_date" : "01 March 2023",
                        "interview_status":"Rejected",
                        "employee":"Frederick Santiago"
                    },
                    
                ];

                const EntryCollection = [{
                    "Author" : "Alexandrina Victoria",
                    "AuthorPicUrl" : sap.ui.require.toUrl("demo/interview/interview/model/women.jpg"),
                    "Type" : "Request",
                    "Date" : "March 03 2023",
                    "Text" : "Michael has good work experience, and required skill set also matching.I think he will be a good choice."
                }
                // , {
                //     "Author" : "George Washington",
                //     "AuthorPicUrl" : sap.ui.require.toUrl("demo/interview/interview/model/men.jpg"),
                //     "Type" : "Reply",
                //     "Date" : "March 04 2013",
                //     "Text" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                // }, {
                //     "Author" : "Alexandrina Victoria",
                //     "AuthorPicUrl" : sap.ui.require.toUrl("demo/interview/interview/model/women.jpg"),
                //     "Type" : "Request",
                //     "Date" : "March 05 2013",
                //     "Text" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                // }, {
                //     "Author" : "George Washington",
                //     "AuthorPicUrl" : sap.ui.require.toUrl("demo/interview/interview/model/men.jpg"),
                //     "Type" : "Rejection",
                //     "Date" : "March 07 2013",
                //     "Text" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                // }
            ]

                this.getView().setModel(oModel, "masterView");
                this.getView().getModel("masterView").setProperty("/Orders",order);
                this.getView().getModel("masterView").setProperty("/comment",EntryCollection);


            },
            onSelectionChange: function(oEvent){
                // var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1);
                let oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("detailsPage" , {layout: "midColumnPages"});
            }
        });
    });
