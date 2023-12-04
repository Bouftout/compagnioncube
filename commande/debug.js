const { MessageEmbed } = require('discord.js');
const os = require('os');
const config = require("../config.json");
const fs = require('fs');

// Charger le fichier package.json
const packageJson = require("../package.json");

// Extraire les noms des packages
const dependencies = packageJson.dependencies || {};

const packageNames = Object.keys(dependencies);

exports.run = (client, message, args, colors) => {



    // Afficher les noms des packages
    console.log(packageNames);

    var allpack = "";

    packageNames.forEach((pN) => {

        allpack += `${pN} ; `

    })

    if (message.author.id === config.owner_id) {
        let upTime = Math.round(os.uptime());
        let upTime1 = Math.round(process.uptime());
        let upTimeSeconds2 = upTime1;
        let upTimeOutput2 = getFormattedUptime(upTime1);

        let upTimeSeconds = upTime;
        let upTimeOutput = getFormattedUptime(upTime);

        const embedFields = [
            {
                name: "Info système:",
                value: `${process.platform}-${process.arch} with ${process.release.name} version ${process.version.slice(1)}`,
                inline: true
            },
            {
                name: "Process info: PID",
                value: `${process.pid}`,
                inline: true
            },
            {
                name: "Usage du bot sur la mémoire:",
                value: `${Math.ceil(process.memoryUsage().heapTotal / 1000000)} MB`,
                inline: true
            },
            {
                name: "Usage de la mémoire totale",
                value: `${Math.ceil((os.totalmem() - os.freemem()) / 1000000)} of ${Math.ceil(os.totalmem() / 1000000)} MB`,
                inline: true
            },
            // {
            //     name: "Temps du pc:",
            //     value: `:clock12: ${upTimeOutput}`,
            //     inline: true
            // },
            {
                name: "Temps du bot:",
                value: `:clock1230: ${upTimeOutput2}`,
                inline: true
            },
            {
                name: 'La library principalement utilisée :',
                value: `*Discord.js*`,
            },
            {
                name: "Toute les libray",
                value: allpack,
            },
        ];

        return message.channel.send({
            embeds: [{
                color: colors.ok,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: `Compagnion Cube speciality`,
                description: ``,
                timestamp: new Date(),
                fields: embedFields,
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: colors.author
                }
            }
            ]
        })
    } else {

        return message.channel.send({
            embeds: [{
                color: colors.error,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: `Erreur Droit !`,
                description: `Veuillez être le créateur du bot pour voir cela !`,
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: colors.author
                }
            }
            ]
        })
    }
};

function getFormattedUptime(seconds) {
    if (seconds < 60) {
        return `${seconds}s`;
    } else if (seconds < 3600) {
        return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    } else if (seconds < 86400) {
        return `${Math.floor(seconds / 3600)}h ${Math.floor(seconds % 3600 / 60)}m ${seconds % 3600 % 60}s`;
    } else if (seconds < 604800) {
        return `${Math.floor(seconds / 86400)}d ${Math.floor(seconds % 86400 / 3600)}h ${Math.floor(seconds % 86400 % 3600 / 60)}m ${seconds % 86400 % 3600 % 60}s`;
    }
}
