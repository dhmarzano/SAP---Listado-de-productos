sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "app2/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("app2.controller.Productos", {

            //Incluyo la liberia con el codigo de control
            formatter: formatter,

            onInit: function () { },

            //Función de busqueda
            onFilterProductos: function (oEvent) {
                //Filtro    
                var aFilter = [],
                    //Matriz de filtro
                    sQuery = oEvent.getParameter("query"),
                    //Recupera el listado de productos
                    oList = this.byId("listaProductos"),
                    //Crea el enlace 
                    oBinding = oList.getBinding("items")
                    //Filtro de busqueda por codido de producto
                if (sQuery) { aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery)); }
                //Aplica el filtro
                oBinding.filter(aFilter);
            }
        });
    });
