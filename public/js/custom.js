function cargarTablaRegistros() {
    $.ajax({
        url: '{{ route(registrosindex) }}',
        method: 'GET',
        success: function(response) {
            $('#tabla-registros').html(response);
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
}

function cargarTablaOtra() {
    $.ajax({
        url: '{{ route(registrosotra) }}',
        method: 'GET',
        success: function(response) {
            $('#tabla-otra').html(response);
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
}

$(document).on('click', '.btn-edit', function() {
    var tr = $(this).closest('tr');
    var id = tr.data('id');
    var campo1 = tr.find('input[name="campo1"]').val();
    var campo2 = tr.find('input[name="campo2"]').val();

    var data = {
        _method: 'PATCH',
        campo1: campo1,
        campo2: campo2
    };

    $.ajax({
        url: '/registros/' + id,
        method: 'POST',
        data: data,
        success: function(response) {
            if (response.success) {
                cargarTablaOtra();
            } else {
                console.log(response.error);
            }
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
});
