exports.run = (client, message, args, colors) => {

  const guild = message.channel.guild;
  const { MessageEmbed } = require('discord.js');

  /*
    const embed = new MessageEmbed()
    .setTitle('Some title')
    .setDescription(`**Server Info**`)
    .setColor('BLACK')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField('General', [
        `**Name:** ${message.guild.name}`,
        `**ID:** ${message.guild.id}`,
        `**Owner:** (${message.guild.ownerID})`,
        `**Region:** `,
        `**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
        `**Explicit Filter:** `,
        `**Verification Level:** `,
    ])
    .addField('Statistics', [
        `**Role Count:** ${roles.length}`,
        `**Emoji Count:** ${emojis.size}`,
        `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
        `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
        `**Member Count:** ${message.guild.memberCount}`,
        `**Humans:** `,
        `**Bots:** `,
        `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
        `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
        `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
        '\u200b'
    ])
    .addField('Presence', [
        `**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
        `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
        `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
        `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
        '\u200b'
    ])
    .addField(`Roles [${roles.length - 1}]`, roles.join(', '))
  
    .setTimestamp();
  */

  const embed = {
    color: colors.error,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: `**Info Serv**`,
    description: `**Stats:**\nNombre de Membre :** ${message.guild.memberCount}` +
      `**Stats:**\nNombre de Membre :** ${message.guild.memberCount}` +
      `\nTier: ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: `©ToniPortal`
    }
  }

  message.channel.send({ embeds: [embed] })
};