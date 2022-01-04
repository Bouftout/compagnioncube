exports.run = async (client, interaction) => {

     const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
interaction.editReply(`Latence aller-retour: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);

}