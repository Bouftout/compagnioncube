exports.run = (client, message, args, colors) => {

    const yaml = require('js-yaml');
    const fs = require('fs');

var file = `./data/exp/${message.author.id}.yml`;

    fs.exists(file, function (exists) {

        if (exists) {


            var test = yaml.load(fs.readFileSync(file, 'utf8'));

            let data = { exp: test.exp+1 };

            let yamlStr = yaml.dump(data);
            fs.writeFileSync(file, yamlStr, 'utf8');

        } else {


            var stream = fs.createWriteStream(file);
            stream.once('open', function (fd) {
                stream.write(`name: ${message.author.username}\n`);
                stream.write(`exp: 0,\n`);
                stream.write(`lvl: 0,\n`);
                stream.write(`lvlup: 0,\n`);
                stream.write(`image: "./image/exp/wallpaper.png"\n`);
                stream.end();
            });

        }


    })


};
