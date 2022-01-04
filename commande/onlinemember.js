exports.run = async (client, message, args, colors) => {


guild.members.fetch().then(fetchedMembers => {
	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
	// Now you have a collection with all online member objects in the totalOnline variable
	message.channel.send(`There are currently ${totalOnline.size} members online in this guild!`);
});

}