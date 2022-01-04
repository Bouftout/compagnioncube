exports.run = (client, message, args, colors) => {

  const fs = require('fs');

  const ytdl = require('ytdl-core');


  const video = ytdl(args[0]).pipe(fs.createWriteStream('./music/yt/youtube.mp3'));


}