$(document).ready(function() {
    $('#btnCargarTabla').click(function() {
      cargarTabla();
      cargarTablaRegistros();
    });
  
    function cargarTablaRegistros() {
        $.ajax({
          type: 'GET',
          url: '/tablar',
          success: function(response) {
            // Actualizar el contenido del contenedor con la tabla recibida
            $('#tabla-registros').html(response);
          }
        });
      }
      cargarTablaRegistros();
  
    function cargarTabla() {
      $.ajax({
        type: 'GET',
        url: '/obtener-tabla',
        success: function(response) {
          // Actualizar el contenido del contenedor con la tabla recibida
          $('#tablaDatos').html(response);
        }
      });
    }
  });