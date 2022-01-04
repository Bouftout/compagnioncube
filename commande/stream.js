exports.run = async (client, message, args, colors) => {

const TwitchApi = require("node-twitch").default;

const twitch = new TwitchApi({
	client_id: "yftuibvijvniuhaba96bjoo5bagrxu",
	client_secret: "odmdwail7dcfxoob4c3nw0rk2vnabf"
});

var stremeur = "merryeliot"

 async function getStream(){
    const streams = await twitch.getStreams({ channel: stremeur});
    console.log(streams);
  }
  
  var streame = await getStream();
  
console.log(streame)
  if(streame == undefined){
    
    message.channel.send(`${stremeur} n'est pas en stream`)

  } else {

    
    message.channel.send(streame)

  }


};