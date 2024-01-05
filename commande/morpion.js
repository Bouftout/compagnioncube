const fs = require("fs");

function ligne(json, nb) {
  switch (Number(nb)) {
    case 1:
      return json.morpl1;
    case 2:
      return json.morpl2;
    case 3:
      return json.morpl3;
  }
}

function col(nb) {
  switch (Number(nb)) {
    case 1:
      return 0;
    case 2:
      return 2
    case 3:
      return 4;
    default:
      return 0;
  }
}

function format(json) {
  return json.morpl1.join("") + "\n--------\n" + json.morpl2.join("") + "\n--------\n" + json.morpl3.join("");
}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.run = (client, message, args, colors) => {
  const wh = `./data/game/morpion/${message.author.id}.json`;

  try {
    if (fs.existsSync(wh)) {

      if (args[1] == "stop" || args[1] == "s") {

        fs.unlinkSync(wh);

        return message.reply("Vous avez bien arrêter votre jeu de morpion !")
      }

      if (!args[1] || !args[2]) return message.reply("Veuillez dire sur quelle ligne vous voulez le placer puis sur quelle colonne");

      let plmorp = JSON.parse(fs.readFileSync(wh, "utf8"));

      let stopw = true;
      while (stopw) {
        
        console.log("Boucle")
        if (ligne(plmorp, args[1])[col(args[2])] == "8") {
          ligne(plmorp, args[1])[col(args[2])] = "X";
          message.channel.send(format(plmorp)) // Envoie de ton tour
          stopw = false;
        }

      }


      let bomorp = plmorp;

      ligne(bomorp, rand(1, 3))[col(rand(1, 3))] = "?";

      message.channel.send("&&&&&&\n" + format(bomorp)) // Envoie du morpion ennemy

      fs.writeFileSync(wh, JSON.stringify(bomorp), "utf8"); // écrire dans le fichier json

    } else {

      const morp = {
        morpl1: ["8", "\u0020|\u0020", "8", "\u0020|\u0020", "8"],
        morpl2: ["8", "\u0020|\u0020", "8", "\u0020|\u0020", "8"],
        morpl3: ["8", "\u0020|\u0020", "8", "\u0020|\u0020", "8"]
      };

      fs.writeFileSync(wh, JSON.stringify(morp), "utf8");

      const final = format(morp);

      message.channel.send("Vous démarrez une partie contre le bot !\n" + final);

    }
  } catch (error) {
    console.error("Error:", error);
    message.reply("Une erreur s'est produite. Veuillez réessayer.");
  }


};
