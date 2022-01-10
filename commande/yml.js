exports.run = (client, message, args, colors) => {

    const yaml = require('js-yaml');
    const fs = require('fs');


    fs.exists(`./data/test.yml`, function(exists) {

        if (exists) {


            var test = yaml.load(fs.readFileSync(`./data/test.yml`, 'utf8'));




            let data = { test: 1 };

            let yamlStr = yaml.dump(data);
            fs.writeFileSync('./data/test.yml', yamlStr, 'utf8');

        } else {


            var stream = fs.createWriteStream(`./data/test.yml`);
            stream.once('open', function(fd) {
                stream.write(`name: ${message.author.username}\n`);
                stream.write(`test: 0\n`);
                stream.end();
            });

        }


    })


};