exports.run = (client, message, args, colors) => {




message.delete()
var textArray = [
  'https://www.youtube.com/watch?v=qaNh_gToJdQ',
  'https://www.youtube.com/watch?v=UPnMFUsKm8w',
  'https://www.youtube.com/watch?v=KVpeHSX2ZEY',
];
var Meme = Math.floor(Math.random() * textArray.length);
      
message.channel.send({
  embed: {
    color: colors.defaut,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: `Musique aléatoire`,
    description: `${textArray[Meme]}`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: `©ToniPortal`
    }

  }
});

  };