$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();

        //validaciones
        var nombre = $('#nombre').val();
        if(nombre.toLowerCase() === 'jose') {
            alert('Lo sentimos, el nombre jose no esta permitido');
            return;
        }
        

        //validar edad
        var edad = parseInt($('#edad').val());
        if(edad <= 17 || edad > 65 || isNaN(edad)) {
            alert('Por favor, ingresa una edad entre 18 y 65.');
            return;
        }

        //si tienes todas las validaciones exitosas, puedes enviar el formulario
        this.submit();

    });
});