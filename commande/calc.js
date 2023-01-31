exports.run = (client, message, args, colors) => {


  function chop(str) {
    var result = [];
    var pastFirst = false;
    str.split('+').forEach(function (x) {
      if (pastFirst) result.push('+');
      if (x.length) result.push(x);
      pastFirst = true;
    });
    return result;
  }

  notcmd = args.slice(1)
  console.log(notcmd)
  if (notcmd.length > 2) {
    args = notcmd;
  } else {
    console.log("chop")
    args = chop(notcmd[0])
  }


  console.log(args)
  let result;
  let number2 = 0;

  let plus = 0;
  let moins = 0;
  let multi = 0;
  let divi = 0;

  args.forEach(element => {
    console.log("element: " + element)


    if (result == 0 || result == undefined) {
      // console.log("result mis a :" + element)
      result = Number(element);
    }

    if (/^\d*$/.test(element)) {
      // console.log("Regpassed")
      number2 = Number(element)
    }

    if (plus == 1) {
      // console.log("result" + result)
      // console.log("plus" + number2)
      result = Number(result) + Number(number2);
      plus--
    }

    if (moins == 1) {
      result = Number(result) - Number(number2);
      moins--
    }

    if (multi == 1) {
      result = Number(result) * Number(number2);
      multi--
    }

    if (divi == 1) {
      result = Number(result) / Number(number2);
      divi--
    }



    if (element == '+') {
      plus++;
    }
    else if (element == '-') {
      moins++;
    }
    else if (element == '*') {
      multi++
    }
    else if (element == '/') {
      divi++;
    }

  });


  if (result != "NaN") {

    let affical = ""

    notcmd.forEach(element => {
      affical += element
    })

    console.log("result: " + result)
    // const embed = 
    message.channel.send({
      embeds: [{
        color: colors.defaut,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Votre opération :**`,
        description: `Calcul : *${affical}*\nRésultat : **${result}**`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }]
    });


  } else {

    message.channel.send({
      embeds: [{
        color: colors.error,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Error**`,
        description: `Chiffre invalide ou erreur`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }]
    });

  }



}






exports.help = {
  usage: `<nombre> * <nombre> || <nombre>/<nombre>`,
  description: `Pour faire des calcul`
};