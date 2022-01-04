exports.run = async (client, message, args) => {

  async function getStream() {
    const streams = await twitch.getStreams({ channel: "merryeliot" });
    console.log(streams);

    const demtrol = new Discord.MessageEmbed()
      .setTitle(`*${streams.user_name}*`)
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      .setColor(0xff80ff)
      .setThumbnail(stream.getThumbnailUrl())
      .setDescription(`*Titre: *${streams.title}\n*Viewver: *${viewer_count}`)
      .setFooter(`©ToniPortal\nStart Date:`, client.user.avatarURL())

      .setTimestamp(streams.started_at)



    message.channel.send({ embed: demtrol }).then((msg) => {


    })

  }

  getStream();

}