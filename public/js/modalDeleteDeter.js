//Escuchamos el evento desde el bton y mandamos los datos de la tabla al modal en el input indicado
$(document).on("click", "#btnmodalDelete", function () {
    var anio = $(this).data("anio");
    var creditof = $(this).data("creditof");
    var clave = $(this).data("clave");
    
    $("#aniom").val(anio);
    $("#creditofm").val(creditof);
    $("#clavem").val(clave);
})