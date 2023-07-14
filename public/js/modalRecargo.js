//Escuchamos el evento desde el bton y mandamos los datos de la tabla al modal en el input indicado
$(document).on("click", "#btnmodalR", function () {
    var id = $(this).data("id");
    var cuenta = $(this).data("cuenta");
    var periodo = $(this).data("periodo");
    var recargo = $(this).data("recargo");
    var rezago = $(this).data("rezago");
    var impuesto = $(this).data("impuesto");
    $("#idR").val(id);
    $("#cuentaR").val(cuenta);
    $("#periodoR").val(periodo);
    $("#rezagoR").val(rezago);
    $("#recargoR").val(recargo);
    $("#impuestoR").val(impuesto);
})