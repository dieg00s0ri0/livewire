//Escuchamos el evento desde el bton y mandamos los datos de la tabla al modal en el input indicado
$(document).on("click", "#btnmodal", function () {
    var id = $(this).data("id");
    var cuenta = $(this).data("cuenta");
    var periodo = $(this).data("periodo");
    var superficie = $(this).data("superficie");
    var valor = $(this).data("valor");
    var tasa = $(this).data("tasa");
    var impuesto = $(this).data("impuesto");
    $("#id").val(id);
    $("#cuentaM").val(cuenta);
    $("#periodo").val(periodo);
    $("#periodo2").val(periodo);
    $("#superficieM").val(superficie);
    $("#valor").val(valor);
    $("#tasaM").val(tasa);
    $("#impuestoM").val(impuesto);
})