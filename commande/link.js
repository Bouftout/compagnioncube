exports.run = (client, message, args, colors) => {

  const linke = client.generateInvite({ scopes: ['applications.commands'] })

message.channel.send(linke)

};