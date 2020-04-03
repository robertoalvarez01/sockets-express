var socket = io();

//Escuchar info deñ Server
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.on('enviarMensaje', (message) => {
    console.log(message);
});


//Enviar info al Server
socket.emit('enviarMensaje', {
    usuario: 'Roberto',
    mensaje: 'Quiero conectarme al servidor'
}, (resp) => {
    console.log(resp);
});