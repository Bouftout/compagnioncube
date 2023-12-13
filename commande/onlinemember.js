exports.run = async (client, message, args, colors) => {
    try {
        const guild = message.guild;

        await guild.members.fetch({ withPresences: true });

        message.channel.send(`**${guild.members.cache.filter(member => !member.user.bot && !member.presence).size}** membre sont en ligne !
Il y a **${guild.memberCount}**/_${guild.maximumMembers}_ personnes dans le serveur.\n`);
    } catch (error) {

        console.warn(error);
        message.reply('An error occurred while fetching member information.');

    }

};
