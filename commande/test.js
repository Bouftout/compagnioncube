exports.run = (client, message, args, colors) => {

    var data = {
        users: [{
            name: 'John'
        },
        {
            num: 2,
            num1: 5
        }
        ]
    };

    const dataapres = JSON.stringify(data);


    console.log(...dataapres)

}