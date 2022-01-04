exports.run = (client, message, args) => {

    const os = require('os'); // paquet os
    const fs = require("fs");

    const config = require("../config.json");


    if (message.author.id == config.owner_id) {
        //Permet de voir des info par rapport au bot !






        let upTime = Math.round(os.uptime());
        let upTime1 = Math.round(process.uptime());
        let upTimeSeconds2 = upTime1;
        let upTimeOutput2 = "";
        if (upTime < 60) {
            upTimeOutput2 = `${upTime1}s`;
        } else if (upTime1 < 3600) {
            upTimeOutput2 = `${Math.floor(upTime1 / 60)}m ${upTime1 % 60}s`;
        } else if (upTime1 < 86400) {
            upTimeOutput2 = `${Math.floor(upTime1 / 3600)}h ${Math.floor(upTime1 % 3600 / 60)}m ${upTime1 % 3600 % 60}s`;
        } else if (upTime1 < 604800) {
            upTimeOutput2 = `${Math.floor(upTime1 / 86400)}d ${Math.floor(upTime1 % 86400 / 3600)}h ${Math.floor(upTime1 % 86400 % 3600 / 60)}m ${upTime % 86400 % 3600 % 60}s`;
        }
        let upTimeSeconds = upTime;
        let upTimeOutput = "";

        if (upTime < 60) {
            upTimeOutput = `${upTime}s`;
        } else if (upTime < 3600) {
            upTimeOutput = `${Math.floor(upTime / 60)}m ${upTime % 60}s`;
        } else if (upTime < 86400) {
            upTimeOutput = `${Math.floor(upTime / 3600)}h ${Math.floor(upTime % 3600 / 60)}m ${upTime % 3600 % 60}s`;
        } else if (upTime < 604800) {
            upTimeOutput = `${Math.floor(upTime / 86400)}d ${Math.floor(upTime % 86400 / 3600)}h ${Math.floor(upTime % 86400 % 3600 / 60)}m ${upTime % 86400 % 3600 % 60}s`;
        }
        const embed_fields = [{
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
        {
            name: "Temps du pc:",
            value: `:clock12: ${upTimeOutput}`,
            inline: true
        },
        {
            name: "Temps du bot:",
            value: `:clock1230: ${upTimeOutput2}`,
            inline: true
        },
        {
            name: 'La library principalement utulisé :',
            value: `*Discord.js*`,
        }, {
            name: "La base",
            value: `*Node.js*`,
        },
        ];

        message.channel.send({
            embed: {
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                color: 0x00FF00,
                fields: embed_fields
            }
        });

    } // if owner
};