//Escuchamos el evento desde el bton y mandamos los datos de la tabla al modal en el input indicado
$(document).on("click", "#btnmodalDeleteCalculo", function () {
    var anio = $(this).data("anio");
    var id = $(this).data("id");
    var cuenta = $(this).data("cuenta");
    
    
    $("#claveC").val(cuenta);
    $("#idC").val(id);
    document.getElementById('anioC').innerHTML = anio;
})