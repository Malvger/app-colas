var socket = io();

//

socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

var searchParams = new URLSearchParams(window.location.search);

//console.log(searchParams);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}


var escritorio = searchParams.get('escritorio');
var label = $('small')

$('h1').text('Escritorio ' + escritorio);
//console.log(escritorio);

$('button').on('click', function() {
    //console.log('click');
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }

        label.text('Ticket ' + resp.numero);



    });
})