exports.run = (client, message, args, colors) => {

  const embed = {
    color: colors.error,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: `**Rpg**`,
    description: `Lien de mon rpg : https://gamejolt.com/games/clickteamgamerpg/451875`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: `©ToniPortal`
    },
    	thumbnail: {
		url: 'https://m.gjcdn.net/game-header/1300/451875-crop204_34_1104_258-ll-b9drurdq-v4.webp',
	},
  }

  message.channel.send({ embeds: [embed] })




  

}