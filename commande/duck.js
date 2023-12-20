const mysql = require('mysql2/promise');
const config = require("../config.json");
const { AttachmentBuilder } = require('discord.js');

// Créer une connexion à la base de données
const pool = mysql.createPool({
    host: config.bdd.host,
    user: config.bdd.user,
    password: config.bdd.password,
    database: config.bdd.database,
    connectionLimit: config.bdd.max // Nombre maximum de connexions
});

function getDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Crée des image différente pour chaque truc de faim sur base de coink
const hungerImages = [
    "0.webp",

    "20.webp",
    "40.webp",
    "60.webp",
    "80.webp",
    "80-100.webp",

    "100.webp",
    "error.webp"
];

function whatimg(nb) {
    let imageIndex;

    if (nb === 0) {
        imageIndex = 0;
    } else if (nb > 0 && nb <= 20) {
        imageIndex = 1;
    } else if (nb > 20 && nb <= 40) {
        imageIndex = 2;
    } else if (nb > 40 && nb <= 60) {
        imageIndex = 3;
    } else if (nb > 60 && nb <= 80) {
        imageIndex = 4;
    } else if (nb > 80 && nb <= 100) {
        imageIndex = 5;
    } else if (nb > 100) {
        imageIndex = 6;
    } else {
        imageIndex = 7
    }

    return `./data/duck/img/${hungerImages[imageIndex]}`;
}


exports.run = async (client, message, args, colors) => {
    const connection = await pool.getConnection();
    const id = message.author.id;


    try {

        async function create() {
            message.delete();

            if (!args[2]) {
                return message.reply("Veuillez mettre le nom de votre canard !")
            }

            let c = await connection.execute(`SELECT count(duck.name) FROM accounts 
            INNER JOIN duck ON accounts.id_duck = duck.id WHERE accounts.id = ?`, [id])

            if (c == 0) {
                await connection.execute(`INSERT INTO duck (name) VALUES (?)`, [args[2]]);
                var msg = await message.channel.send({
                    embeds: [{
                        color: colors.defaut,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: `Coink`,
                        description: `Votre canard nomée : **${args[2]}** prend vie !`,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                        }
                    }
                    ]
                })
                setTimeout(function () {
                    msg.delete();
                }, 2000)
            } else {
                message.reply("Vous avez déjà un canard !")
            }

        }


        switch (args[1]) {
            case "m":
            case "money":
                // UPDATE accounts SET money = money + winmoney
                const [selec, fie] = await connection.execute('SELECT money,winmoney,date FROM accounts WHERE id = ?;', [id]);

                const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000); // Une heure en arrière

                if (new Date(selec[0].date) < oneHourAgo || (config.owner_id == message.author.id && args[2] == "f")) {
                    let date = getDate();
                    let [rows, fields] = await connection.execute(`UPDATE accounts SET money = money + winmoney, date = ? WHERE id = ?;`, [date, id]);

                    message.channel.send({
                        embeds: [{
                            color: colors.ok,
                            author: {
                                name: client.user.username,
                                icon_url: client.user.avatarURL()
                            },
                            title: `Money !`,
                            description: `Votre argent actuel a augmentée a : ${selec[0].money + selec[0].winmoney}`,
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: `©ToniPortal`
                            }
                        }
                        ]
                    })

                } else {
                    let date = new Date(selec[0].date);
                    return message.channel.send({
                        embeds: [{
                            color: colors.ok,
                            author: {
                                name: client.user.username,
                                icon_url: client.user.avatarURL()
                            },
                            title: `Money !`,
                            description: `Veuillez patientez jusqu'a **${date.getHours() + 1}** Heure et **${String(date.getMinutes()).padStart("2", 0)}** minutes`,
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: `©ToniPortal`
                            }
                        }
                        ]
                    })
                }
                break;
            case "b":
            case "buy":
                var [se, a] = await connection.execute('SELECT accounts.money AS "money",duck.json AS "json",faim FROM accounts INNER JOIN duck ON accounts.id_duck = duck.id');

                /*
                 Explication :
                 certain est un array la 1ière valeur correspond au prix,et la 2 ième a combien de faim tu gagne
                 */

                const buythingLowerCase = {};
                var json = JSON.parse(se[0].json)
                for (const key in json) {
                    const firstLetter = key.charAt(0).toLowerCase();
                    buythingLowerCase[firstLetter] = json[key];
                }

                const fla = args[2].charAt(0).toLowerCase();

                if (se[0].money >= buythingLowerCase[fla][0]) {
                    // console.log(buythingLowerCase[fla])

                    await connection.execute(`
                    UPDATE accounts 
                    INNER JOIN duck ON accounts.id_duck = duck.id 
                    SET accounts.money = accounts.money - ?, duck.faim = duck.faim + ? 
                    WHERE accounts.id = ?;
                  `, [buythingLowerCase[fla][0], buythingLowerCase[fla][1], id]);

                    let actualFaim = buythingLowerCase[fla][1] + se[0].faim;

                    const file = new AttachmentBuilder(whatimg(actualFaim));

                    return message.channel.send({
                        embeds: [{
                            color: colors.ok,
                            author: {
                                name: client.user.username,
                                icon_url: client.user.avatarURL()
                            },
                            title: `Vous avez achetée un produit à ${buythingLowerCase[fla][0]}$ `,
                            description: `Vous avez rempli la faim de votre canard ! 
Faim donner : **${buythingLowerCase[fla][1]}**
Faim actuel : **${actualFaim}**
Il vous reste : ***${se[0].money - buythingLowerCase[fla][0]}**$*`,
                            timestamp: new Date(),
                            image: {
                                url: `attachment://${path.basename(whatimg(actualFaim))}`,
                            },
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: `©ToniPortal`
                            }
                        }
                        ], files: [file]
                    })

                } else if (se[0].money < buythingLowerCase[fla][0]) {
                    return message.reply("Vous n'avez pas assez d'argent !")
                } else {
                    return message.channel.send({
                        embeds: [{
                            color: colors.defaut,
                            author: {
                                name: client.user.username,
                                icon_url: client.user.avatarURL()
                            },
                            title: `Money!`,
                            description: `Veuillez choisir une chose valide en utulisant la 1ière lettre !\n*${Object.keys(json).join("\n")}*`,
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: `©ToniPortal`
                            }
                        }
                        ]
                    })
                }



                break;
            case "c":
            case "create":
                create();
                break;
            case "l":
            case "leaderboard":
                let l = await connection.execute(`SELECT duck.name AS "duckname",accounts.name AS "accname",faim AS "faim" FROM accounts 
                INNER JOIN duck ON accounts.id_duck = duck.id ORDER BY faim ASC LIMIT 10`);

                var msg = "DuckName ; AccName\n";
                l[0].forEach((la) => {
                    msg += `**${la.duckname}** -> *${la.accname}*\nFaim : **${la.faim}**\n`;
                })

                return message.channel.send({
                    embeds: [{
                        color: colors.defaut,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: `Leaderboard`,
                        description: msg,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                        }
                    }
                    ]
                })
            default:
                return message.channel.send({
                    embeds: [{
                        color: colors.defaut,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: `Money!`,
                        description: `Veuillez choisir quoi faire au canard : \n
                - money
                - buy
                - create
                - leaderboard`,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                        }
                    }
                    ]
                })
        }


    } catch (error) {
        console.warn('Erreur total de la commande duck ! :', error);
    } finally {
        connection.release(); // Libérer la connexion
    }


};
