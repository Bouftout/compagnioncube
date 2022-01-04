exports.run = (client, message, args, colors) => {

  const morpion = require('morpionzerwyx');
  const zerwyx = new morpion({
    language: 'fr'
  })
  zerwyx.handleMessage(message)



} // fin