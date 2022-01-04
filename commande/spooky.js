exports.run = (client, message, args) => {

  message.channel.send({
    embed: {
      color: 0xffffff,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: "VOUS AVEZ ÉTÉ EFFRAYÉ PAR LE SQUELETTE EFFRAYANT",
      description:

        "-----------------------------------------------------------------"
        + "\n    ░░░░░░▄▄▄░░▄██▄"
        + "\n    ░░░░░▐▀█▀▌░░░░▀█▄"
        + "\n    ░░░░░▐█▄█▌░░░░░░▀█▄"
        + "\n    ░░░░░░▀▄▀░░░▄▄▄▄▄▀▀"
        + "\n    ░░░░▄▄▄██▀▀▀▀"
        + "\n    ░░░█▀▄▄▄█░▀▀"
        + "\n    ░░░▌░▄▄▄▐▌▀▀▀"
        + "\n    ▄░▐░░░▄▄░█░▀▀ U HAVE BEEN SPOOKED BY THE"
        + "\n    ▀█▌░░░▄░▀█▀░▀"
        + "\n    ░░░░░░░▄▄▐▌▄▄"
        + "\n    ░░░░░░░▀███▀█░▄"
        + "\n    ░░░░░░▐▌▀▄▀▄▀▐▄SPOOKY SKELETON"
        + "\n    ░░░░░░▐▀░░░░░░▐▌"
        + "\n    ░░░░░░█░░░░░░░░█"
        + "\n    ░░░░░▐▌░░░░░░░░░█"
        + "\n-----------------------------------------------------------------",
      timestamp: new Date(),
      footer: {
        icon_url: "https://pre00.deviantart.net/f383/th/pre/f/2015/304/c/f/spooky_scary_skeletons_by_jamtoon-d9f0d4n.png",
        text: `Spooky Skeleton`
      }
    }
  })


}