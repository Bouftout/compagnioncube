
const fs = require("fs"),
  ytpl = require('ytpl');

exports.run = async (client, message, args, colors) => {


  //Permet d'enregistrer des musique a avoir

  if (args[0] == "yt") {

    for (var i = 1; i <= args.length; i++) {
      var enleverytb = args[i - 1].replace("https://www.youtube.com/watch?v=", "");

      fs.writeFile(`./data/autre/ytplaylist/${enleverytb}.txt`, '', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

    }

  } else if (args[0] == "pl") {

    const firstResultBatch = await ytpl(args[1].replace("https://www.youtube.com/watch?v=_crezDzuriM&list=", ""), {
      pages: 1
    });
    // https://www.youtube.com/watch?v=_crezDzuriM&list=PLmx0cwWL2xwGjHsQD3WvYx_CQRAeMdf_j
    //firstResultBatch.items[0].shortUrl

    console.log(firstResultBatch.items.length)

    for (var i = 1; i <= firstResultBatch.items.length; i++) {
      var enleverytb = firstResultBatch.items[i].shortUrl.replace("https://www.youtube.com/watch?v=", "");

      fs.writeFile(`./data/autre/ytplaylist/${enleverytb}.txt`, '', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

    }

  } else {

    message.delete()

    var list = fs.readdirSync("./data/autre/ytplaylist", { withFileTypes: false })
    var Meme = Math.floor(Math.random() * list.length);

    var final = list[Meme].replace(".txt", "");


    const embed = {
      color: colors.defaut,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `Musique aléatoire`,
      description: `https://www.youtube.com/watch?v=${final}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }

    return message.channel.send({ embeds: [embed] })

  }

};