exports.run = (client, message, args) => {

  if (message.author.bot) return;



  const fs = require('fs-extra')

  const packageObj = fs.readJsonSync('./package.json')
  message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Voici les information sur le package.json**`,
      description: `
    Name: ${packageObj.name} 
    Description: ${packageObj.description}
    Version: ${packageObj.version} 
    Licence: ${packageObj.licence} 
    Test: ${packageObj.scripts.test} 
    Author: ${packageObj.author} \n 

    Dependence: ${packageObj.dependencies.dependencies} 
    `,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }
  })

};
