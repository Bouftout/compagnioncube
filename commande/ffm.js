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



            /*
                console.log({
    info: info,
    attributes: attributes,
    gear: gear,
});*/


console.log(resid.character.class_jobs)


            function cap(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            //return whether or not the character's lodestone bio matches our token
            const embed = {
                title: `Classe: ${resid.character.active_class_job.name}`,
                description: `Lvl: ${resid.character.active_class_job.level}`,
                author: { // Author property
                    name: char.name,
                    icon_url: char.avatar
                },
                url: `https://fr.finalfantasyxiv.com/lodestone/character/${char.id}/`,
                /*
                fields: [ // Array of field objects
                    {
                        name: `${cap(attributes[0].name)}`,
                        value: `${attributes[0].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[1].name)}`,
                        value: `${attributes[1].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[2].name)}`,
                        value: `${attributes[2].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[3].name)}`,
                        value: `${attributes[3].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[4].name)}`,
                        value: `${attributes[4].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[5].name)}`,
                        value: `${attributes[5].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[6].name)}`,
                        value: `${attributes[6].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[7].name)}`,
                        value: `${attributes[7].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[8].name)}`,
                        value: `${attributes[8].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[9].name)}`,
                        value: `${attributes[9].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[10].name)}`,
                        value: `${attributes[10].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[11].name)}`,
                        value: `${attributes[11].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[12].name)}`,
                        value: `${attributes[12].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[13].name)}`,
                        value: `${attributes[13].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[14].name)}`,
                        value: `${attributes[14].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[15].name)}`,
                        value: `${attributes[15].value}`,
                        inline: true
                    },
                    {
                        name: `${cap(attributes[16].name)}`,
                        value: `${attributes[16].value}`,
                        inline: true
                    },
                    {
                        name: `Object`,
                        value: `Les 2 valeur afficher sont la cagatégorie et le level "i_level"`,
                    },
                    {
                        name: `${gear[0].name}`,
                        value: `${gear[0].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[1].name}`,
                        value: `${gear[1].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[2].name}`,
                        value: `${gear[2].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[3].name}`,
                        value: `${gear[3].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[4].name}`,
                        value: `${gear[4].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[5].name}`,
                        value: `${gear[5].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[6].name}`,
                        value: `${gear[6].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[7].name}`,
                        value: `${gear[7].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[8].name}`,
                        value: `${gear[8].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[9].name}`,
                        value: `${gear[9].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[10].name}`,
                        value: `${gear[10].category}\n${gear[0].i_level}`,
                        inline: true
                    },
                    {
                        name: `${gear[11].name}`,
                        value: `${gear[11].category}\n${gear[0].i_level}`,
                        inline: true
                    } //NE CONTE PAS car pas assez de place dans ujn embed

                ],*/
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