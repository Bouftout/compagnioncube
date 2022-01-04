exports.run = async (client, interaction) => {

  const fs = require('fs'),
    Discord = require("discord.js"),
    yaml = require('js-yaml'),
    ytdl = require('ytdl-core');
    const fmmepg = require('ffmpeg-static');

  const {
    AudioPlayerStatus,
    StreamType,
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
  } = require('@discordjs/voice');


  const connection = joinVoiceChannel({
    channelId: interaction.member.voice.channel.id,
    guildId: interaction.member.guild.id,
    adapterCreator: interaction.member.guild.voiceAdapterCreator,
  });


  const string = await interaction.options.getString('ytb');


  const stream = ytdl(string, { filter: 'audioonly' });
  const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
  const player = createAudioPlayer();
  
  player.play(resource);
  connection.subscribe(player);
  
  
  player.on(AudioPlayerStatus.Idle, () => connection.destroy());


  const startmusicembed = {
    color: 0xff80ff,
    title: 'Musique youtube',
    url: string,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: 'Votre musique va démarrer !',
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: `©ToniPortal`
    },
  };


  interaction.reply({
    embeds: [startmusicembed]
  });


/*

  try {
    if (string.search('list') > -1) {
      console.log('LIST')
      const ytpl = require('ytpl');

      const stream = ytdl(string, {
        filter: 'audioonly'
      });
      const resource = createAudioResource(stream, {
        inputType: StreamType.Arbitrary
      });
      const player = createAudioPlayer();

      player.play(resource);
      connection.subscribe(player);

      const firstResultBatch = await ytpl(string, {
        pages: -1
      });


      const res = string.search('index=');
      const suite = string.slice(res)
      const resultaindex = suite.slice(6)

      let number = resultaindex

      player.on(AudioPlayerStatus.Idle, () => {

        start()

        async function start() {

          try {
            console.log('CONTINUE')
            number++;
            console.log(number)

            console.log(firstResultBatch.items[number].shortUrl);

            const stream = ytdl(firstResultBatch.items[number].shortUrl, {
              filter: 'audioonly'
            });
            const resource = createAudioResource(stream, {
              inputType: StreamType.Arbitrary
            });
            const player = createAudioPlayer();

            player.play(resource);
            connection.subscribe(player)

            player.on(AudioPlayerStatus.Idle, () => {
              start()
            })

          } catch (err) {

            console.log(err)

            const errorembedstart = {
              color: 0xff80ff,
              title: 'Erreur',
              url: string,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              description: 'Votre cube a était détruit !',
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
              },
            };
            console.log(err)

            interaction.reply({
              embeds: [errorembedstart]
            });
          }

        }

      });


      player.on('error', error => {
        console.error(error);
      });

    } else {


      const stream2 = ytdl(string, {
        filter: 'audioonly'
      });
      const resource = createAudioResource(stream2, {
        inputType: StreamType.Arbitrary
      });
      const player2 = createAudioPlayer();

      player2.play(resource);
      connection.subscribe(player2);

      player2.on(AudioPlayerStatus.Idle, () => connection.destroy());


    }
    const startmusicembed = {
      color: 0xff80ff,
      title: 'Musique youtube',
      url: string,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      description: 'Votre musique va démarrer !',
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      },
    };


    interaction.reply({
      embeds: [startmusicembed]
    });
  } catch (err) {

    const errorembed = {
      color: 0xff80ff,
      title: 'Erreur',
      url: string,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      description: 'Une erreur a était commise !',
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      },
    };


    interaction.reply({
      embeds: [errorembed]
    });


  }
  */

};