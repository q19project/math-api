'use strict';
const Bcrypt = require('bcrypt');
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 8091,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {
            return 'Hello World! I\'m Hapi';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
