exports.run = async (client, message, args, colors) => {

    message.delete()


    const XIVAPI = require('@xivapi/js')
    const xiv = new XIVAPI({
        private_key: 'ba29fe8e1d7f4b3db22bd49ee3b364ca584b458e00d04cc182f44420eb7b9900',
        language: 'fr',
        snake_case: true
    })


    //find the character with their name and server
    let res = await xiv.character.search(`${args[1]} ${args[2]}`, { server: 'Moogle' }) //case insensitive server names, btw ;)

    //get the character
    let char = res.results[0]

    const resid = await xiv.character.get(char.id, { extended: true });


    console.log(resid.character.class_jobs[0].level)

    var listnolvl1 = [];

    resid.character.class_jobs.forEach(element => {
        if (element.level != 0) {
            listnolvl1.push(
                {
                name: cap(element.name),
                value: `Lvl: ${element.level}`,
                inline: true
            }
            );
        }

    });

    console.log(listnolvl1)

    function cap(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //return whether or not the character's lodestone bio matches our token
    const embed = {
        title: `Classe: ${cap(resid.character.active_class_job.name)}`,
        description: `Lvl: ${resid.character.active_class_job.level}`,
        author: { // Author property
            name: char.name,
            icon_url: char.avatar
        },
        url: `https://fr.finalfantasyxiv.com/lodestone/character/${char.id}/`,

        fields: listnolvl1,
        
        color: 0x008000, // Color, either in hex (show), or a base-10 integer
        footer: { // Footer text
            text: "ToniPortal"
        },
        image: {
            url: `${resid.character.portrait}`,
        },
    }



    return message.channel.send({ embeds: [embed] })

}