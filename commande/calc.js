function calc(tokens) {
  const operators = new Set(['+', '-', '*', '/', 'x']);

  var anciencalc = 0, actualope;
  var calcul = [];

  tokens.forEach((token, tour) => {
    if (operators.has(token)) {
      //Si l'array actuel est un opérateur
      // console.log("OperatorToken", token);

      actualope = token;


    } else {
      // console.log("PushToken", token)
      calcul.push(token)
    }

    if (tour == 2) {
      //Si c'est le 3ieme tour
      console.log("A calculer départ: ", calcul)

      //Voir quel opétareur actuel
      switch (actualope) {
        case '+':
          anciencalc = (Number(calcul[0]) + Number(calcul[1]))
          break;
        case '-':
          anciencalc = (Number(calcul[0]) - Number(calcul[1]))
          break;
        case 'X':
        case 'x':
        case '*':
          anciencalc = (Number(calcul[0]) * Number(calcul[1]))
          break;
        case '/':
          anciencalc = (Number(calcul[0]) / Number(calcul[1]))
          break;
        default:
          return "Error";
      }

      calcul = [];

    } else if (tour % 2 === 0 && tour != 2 && tour != 0) {

      console.log("A calculer après : ", calcul)

      //Voir quel opétareur actuel
      switch (actualope) {
        case '+':
          anciencalc += Number(calcul[0]);
          break;
        case '-':
          anciencalc -= Number(calcul[0]);
          break;
        case 'X':
        case 'x':
        case '*':
          anciencalc *= Number(calcul[0]);
          break;
        case '/':
          anciencalc /= Number(calcul[0]);
          break;
        default:
          return "Error";
      }

      calcul = [];

    }


  });

  // Le résultat final est le seul élément restant dans la pile
  return anciencalc;
}

exports.run = (client, message, args, colors) => {

  if (args[1]) { // Vérifier que il a au moins un argument pour le calcul

    var cal = 0;

    if (args[2]) {
      //Si il fait des espace pour faire les calcul

      args.shift() //supprimer le *calc

      cal = calc(args);

    } else {
      //Si il fait pas d'espace !

      let tableau = args[1].match(/(\d+|[\+\-\*\/\x])/g);
      cal = calc(tableau);

      args.shift(); //supprimer le *calc
    }


    message.channel.send({
      embeds: [{
        color: colors.defaut,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Votre opération :**`,
        description: `Calcul : *${args}*\nRésultat : **${cal}**`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }]
    });





  } else {
    message.reply("Veuillez mettre un argument")
      .then(msg => {
        setTimeout(() => {
          message.delete();
          msg.delete()
        }, colors.time)
      })
  }


}



exports.help = {
  usage: `<nombre> * <nombre> || <nombre>/<nombre>`,
  description: `Pour faire des calcul`
};