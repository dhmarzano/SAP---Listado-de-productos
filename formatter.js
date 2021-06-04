//Libreria con codigo de control y formato de campos
sap.ui.define([], function () {
    "use strict";
    return {
        controlPeso: function (peso) {
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle(),

                resultado = "";
            peso = peso / 1000;

            if (peso < 0.5) {
                resultado = oResourceBundle.getText("envioCorreo");
                console.log(1);
            } else if (peso < 5) {
                resultado = oResourceBundle.getText("envioPaqueteria");
                console.log(2);
            } else {
                resultado = oResourceBundle.getText("envioTransporte");
                console.log(3);
            }
            return resultado;
        }
    };
});