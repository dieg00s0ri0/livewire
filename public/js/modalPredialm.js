//Escuchamos el evento desde el bton y mandamos los datos de la tabla al modal en el input indicado
$(document).on("click", "#btnmodalm", function () {
    var id = $(this).data("idm");
    var cuenta = $(this).data("cuentam");
    var periodo = $(this).data("periodom");
    var superficie = $(this).data("superficiem");
    var valor = $(this).data("valorm");
    var tasa = $(this).data("tasam");
    var impuesto = $(this).data("impuestom");
    $("#idm").val(id);
    $("#cuentaMm").val(cuenta);
    $("#periodom").val(periodo);
    $("#periodom2").val(periodo);
    $("#superficieMm").val(superficie);
    $("#valorm").val(valor);
    $("#tasaMm").val(tasa);
    $("#impuestoMm").val(impuesto);
})