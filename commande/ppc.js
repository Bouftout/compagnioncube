exports.run = (client, message, args) => {
  if (message.author.bot) return;

  var rps = args.join(" ");
  if (!rps || rps != "pierre" && rps != "papier" && rps != "ciseaux") {
    message.reply("Veuillez entrer la pierre, le papier ou les ciseaux.");
  } else {
    if (rps == "pierre") {
      rps = ":right_facing_fist:"
    } else if (rps == "papier") {
      rps = ":raised_hand:"
    } else if (args == "ciseaux") {
      rps = ":v:"
    }

    var response = [];
    response.push(":right_facing_fist:");
    response.push(":raised_hand:");
    response.push(":v:");

    var responsenum = Math.floor((Math.random()) * 3)
    var botJanken = response[responsenum];

    var msgArray = [];
    msgArray.push(`${message.author.username}` + rps + '\n     **VS**\nGlados: ' + botJanken);

    if (botJanken == rps) {
      msgArray.push("```fix\nDraw!```");
    }
    else if (rps == ":right_facing_fist:" && botJanken == ":v:" ||
      rps == ":raised_hand:" && botJanken == ":right_facing_fist:" ||
      rps == ":v:" && botJanken == ":raised_hand:") {
      msgArray.push("```diff\n+ Tu as gagné!```");
    }
    else if (rps == ":right_facing_fist:" && botJanken == ":raised_hand:" ||
      rps == ":raised_hand:" && botJanken == ":v:" ||
      rps == ":v:" && botJanken == ":right_facing_fist:") {
      msgArray.push("```diff\n- Tu as perdu!```");
    }
    else msgArray.push("```fix\nQuelque chose s'est mal passé! Réessayer!```");

    message.channel.send(msgArray);
  }
}