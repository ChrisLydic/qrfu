const clients = {};

const socket = {
    addClient: client => {
        client.on('join', function(id, ratio, filetype, multiple) {
            console.log(`${id} joined`);

            const data = {
                uid: id,
                ratio: ratio,
                filetype: filetype,
                multiple: multiple,
                socket: client,
            };

            clients[id] = data;
        });

        client.on('disconnect', function () {
            // there can be multiple users on one socket, make sure all are removed
            var keys = Object.keys(clients).filter( k => clients[k].socket.id === client.id );

            for (var i = 0; i < keys.length; i++) {
                delete clients[keys[i]];
                console.log(`${keys[i]} disconnected`);
            }
        });
    },
    send: (id, name, type, url) => {
        clients[id].socket.emit('messages', {name: name, type: type, url: url, uid: id});
    },
    isValid: id => clients[id] !== undefined,
    getFiletype: id => clients[id].filetype,
    getRatio: id => clients[id].ratio,
    isMultiple: id => clients[id].multiple,

    // for testing
    addId: (id, ratio, type, multiple, socket) =>
        clients[id] = {uid: id, ratio: ratio, filetype: type, multiple: multiple, socket: socket},
}

Object.freeze(socket);
module.exports = socket;