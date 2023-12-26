const fs = require("fs")

exports.run = (client, message, args, colors) => {

  // const final = morp.morpl1.join("") + "\n-----\n" + morp.morp2.join("") + "\n-----\n" + morp.morp3.join("")

  if (args[1] == "start") {


    const morp = {
      "morpl1": ["0", "\u0020|\u0020", "0", "\u0020|\u0020", "0"],
      "morpl2": ["0", "\u0020|\u0020", "0", "\u0020|\u0020", "0"],
      "morpl3": ["0", "\u0020|\u0020", "0", "\u0020|\u0020", "0"]
    }

    const final = morp.morpl1.join("") + "\n--------\n" + morp.morpl2.join("") + "\n--------\n" + morp.morpl3.join("")

    message.channel.send("Vous démmarer une partie contre le bot !\n" + final)

  }

} // fin