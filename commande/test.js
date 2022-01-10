exports.run = async(client, message, args, colors) => {

    var pinch = require('pinch');


    var data = {
        users: [{
                name: 'John'
            },
            {
                name: 'Kenneth',
            },
            {
                name: 'Brent'
            }
        ]
    };

    data = JSON.stringify(data);

    console.log(pinch(data, 'users[0].name', 'Juan'))
}