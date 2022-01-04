
exports.run = (client, message, args) => {
    if (message.author.bot) return;


    message.channel.send('```diff\n+' + message.content + '```');

};