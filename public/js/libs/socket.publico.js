var socket = io();

//


var lbTicket1 = $('#lblTicket1');
var lbTicket2 = $('#lblTicket2');
var lbTicket3 = $('#lblTicket3');
var lbTicket4 = $('#lblTicket4');

var lbEscritorio1 = $('#lblEscritorio1');
var lbEscritorio2 = $('#lblEscritorio2');
var lbEscritorio3 = $('#lblEscritorio3');
var lbEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lbTicket1, lbTicket2, lbTicket3, lbTicket4];
var lbEscritorios = [lbEscritorio1, lbEscritorio2, lbEscritorio3, lbEscritorio4];


socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});


socket.on('estadoActual', function(data) {
    // console.log(data);
    actualizarHTML(data.ultimos4)
});

socket.on('ultimos4', function(data) {
    // console.log(data);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();


    actualizarHTML(data.ultimos4);
});




function actualizarHTML(ultimos4) {
    for (let i = 0; i < ultimos4.length; i++) {
        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lbEscritorios[i].text('Escritorio  ' + ultimos4[i].escritorio);

    }
}