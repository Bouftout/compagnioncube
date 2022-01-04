exports.run = (client, message, args, colors) => {

    const Discord = require("discord.js");


    brmusic(10)

    function brmusic(maximo) {

        let max = maximo + 1;


        let intervalval = 1;


        const mesgggdebarre = new Discord.MessageEmbed()
            .setTitle("**Barre**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Une barre va être mis en place")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



        message.channel.send({ embed: mesgggdebarre }).then((msg) => {









            var idVar = setInterval(() => {

                console.log(intervalval)




                const x = "□";
                const barStr = `[${'='.repeat(intervalval)}${'□'.repeat(max - intervalval)}]`;
                console.log(barStr);




                const barre = new Discord.MessageEmbed()
                    .setTitle("**Barre**")
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setColor(colors.defaut)
                    .setDescription(barStr)
                    .setFooter(`©ToniPortal`, client.user.avatarURL())
                    .setTimestamp(new Date());

                msg.edit(barre)

                intervalval++
                if (intervalval == max || intervalval > max) {

                    myStopFunction()
                }


            }, 1000);



            function myStopFunction() {
                clearInterval(idVar);
            }


        });

    }



}