const { io } = require('../server');

io.on('connection', (client) => {


    console.log('Usuario conectado');

    //Enviar al cliente
    client.emit('enviarMensajeAlCliente', {
        usuario: 'Roberto Admin'
    });



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        // if (message.usuario) {
        //     callback({
        //         ok: true
        //     });
        // } else {
        //     callback({
        //         ok: false
        //     });
        // }
    });

});