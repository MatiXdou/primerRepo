$(document).ready(function() {
    $('form').submit(function(){
        e.preventDefault();

        //validaciones
        var nombre = $('#nombre').val();
        if(nombre.toLowerCase() === 'jose') {
            alert('Lo sentimos, el nombre jose no esta permitido');
            return;
        }
        //si tienes todas las validaciones exitosas, puedes enviar el formulario
        this.submit();
    });
});