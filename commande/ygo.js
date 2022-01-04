exports.run = (client, message, args) => {

  if (message.author.bot) return;

  var arg = Math.floor((Math.random() * 7) + 1);
  if (!arg || arg != "1" && arg != "2" && arg != "3" && arg != "4" && arg != "5" && arg != "6" && arg != "7") {

    message.channel.sendMessage({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Information**`,
        description: "Veuiller entrer le 1,le 2,3,4,5,6 ou le 7",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    })



  } else {
    if (arg == "1") {
      rps = "ATK1800"
    } else if (arg == "2") {
      rps = "DEF2000"
    } else if (arg == "3") {
      rps = "ATK5500"
    } else if (arg == "4") {
      rps = "ATK2500"
    } else if (arg == "5") {
      rps = "ATK4000"
    } else if (arg == "6") {
      rps = "DEF000"
    } else if (arg == "7") {
      rps = "DEF6010"
    }

    var response = [];
    response.push("DEF2000");
    response.push("ATK200");
    response.push("ATK2500");
    response.push("DEF0000");
    response.push("DEF2900");
    response.push("ATK3110");
    response.push("ATK6020");


    var responsenum = Math.floor((Math.random()) * 3)
    var botJanken = response[responsenum];

    var msgArray = [];
    msgArray.push(`${message.author.username}: _` + rps + "_" + '\n     **VS**\nGlados: _' + botJanken + "_");

    if (botJanken == rps) {
      msgArray.push("```fix\nSUCIDE ?!```");
    }
    else if (rps == "ATK1800" && botJanken == "ATK200" ||
      rps == "ATK1800" && botJanken == "DEF0000" ||


      rps == "DEF2000" && botJanken == "ATK200" ||
      rps == "DEF2000" && botJanken == "DEF0000" ||


      rps == "ATK4000" && botJanken == "DEF2900" ||
      rps == "ATK4000" && botJanken == "ATK3110" ||
      rps == "ATK4000" && botJanken == "DEF200" ||
      rps == "ATK4000" && botJanken == "DEF2000" ||
      rps == "ATK4000" && botJanken == "ATK2500" ||
      rps == "ATK4000" && botJanken == "DEF0000" ||
      rps == "ATK4000" && botJanken == "ATK200" ||

      rps == "DEF6010" && botJanken == "ATK200" ||
      rps == "DEF6010" && botJanken == "ATK2500" ||
      rps == "DEF6010" && botJanken == "ATK3110" ||

      rps == "ATK2500" && botJanken == "DEF0000" ||
      rps == "ATK2500" && botJanken == "ATK200" ||
      rps == "ATK2500" && botJanken == "DEF2000" ||


      rps == "ATK5500" && botJanken == "DEF2000" ||
      rps == "ATK5500" && botJanken == "DEF200" ||
      rps == "ATK5500" && botJanken == "DEF000" ||
      rps == "ATK5500" && botJanken == "DEF2900" ||
      rps == "ATK5500" && botJanken == "ATK200" ||
      rps == "ATK5500" && botJanken == "ATK2500" ||
      rps == "ATK5500" && botJanken == "ATK3110") {
      msgArray.push("```diff\n+ Tu as gagné!```");
    }
    else if (rps == "ATK1800" && botJanken == "DEF2000" ||
      rps == "ATK1800" && botJanken == "ATK2500" ||
      rps == "ATK1800" && botJanken == "DEF2900" ||
      rps == "ATK1800" && botJanken == "ATK3110" ||
      rps == "ATK1800" && botJanken == "ATK6020" ||


      rps == "DEF2000" && botJanken == "ATK2500" ||

      rps == "DEF2000" && botJanken == "ATK3110" ||
      rps == "DEF2000" && botJanken == "ATK6020" ||

      rps == "ATK5500" && botJanken == "ATK6020" ||


      rps == "ATK2500" && botJanken == "ATK6020" ||
      rps == "ATK2500" && botJanken == "ATK3110" ||

      rps == "ATK4000" && botJanken == "ATK6020" ||

      rps == "DEF000" && botJanken == "DEF2000" ||
      rps == "DEF000" && botJanken == "ATK200" ||
      rps == "DEF000" && botJanken == "ATK2500" ||
      rps == "DEF000" && botJanken == "DEF2900" ||
      rps == "DEF000" && botJanken == "ATK3110" ||
      rps == "DEF000" && botJanken == "ATK6020") {

      msgArray.push("```diff\n- Tu as perdu!```");


    }
    else if
      (rps == "DEF000" && botJanken == "DEF0000") {

      msgArray.push("```diff\nPersonne meurt !?```");
    }
    else if
      (rps == "ATK2500" && botJanken == "DEF2900") {

      msgArray.push("```diff\nTa attaqué la defense alors que tu avais moins en atk,TU EST CON !!```");
    }
    else if
      (rps == "DEF6010" && botJanken == "DEF0000" ||
      rps == "DEF6010" && botJanken == "DEF2900" ||
      rps == "DEF6010" && botJanken == "DEF2000" ||
      rps == "DEF2000" && botJanken == "DEF2900") {

      msgArray.push("```diff\n+-_-\n- On va bien avancer comme ça !```");
    }


    else {
      msgArray.push("```fix\nQuelque chose s'est mal passé! Réessayer!```");
    }

    message.channel.send(msgArray);  //ENVOIE MSG 
  }
}