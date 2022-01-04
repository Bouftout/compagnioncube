exports.run = (client, interaction) => {

    
    const { DiscordTogether } = require('discord-together');
    client.discordTogether = new DiscordTogether(client);

    const tonchoix = interaction.options.getString('int');


    client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, `${tonchoix}`).then(async invite => {
            return interaction.reply(`${invite.code}`);
});



}