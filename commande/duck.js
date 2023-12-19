const mysql = require('mysql2/promise');
const config = require("../config.json");

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

exports.run = async (client, message, args, colors) => {
    const connection = await pool.getConnection();
    const id = message.author.id;

    try {

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
            case "buy":
                const [se, a] = await connection.execute('SELECT accounts.money AS "money",duck.json AS "json",faim FROM accounts INNER JOIN duck ON accounts.id_duck = duck.id');

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
                    console.log(buythingLowerCase[fla])
                    let [t, e] = await connection.execute(`
                    UPDATE accounts 
                    INNER JOIN duck ON accounts.id_duck = duck.id 
                    SET accounts.money = accounts.money - ?, duck.faim = duck.faim + ? 
                    WHERE accounts.id = ?;
                  `, [buythingLowerCase[fla][0], buythingLowerCase[fla][1], id]);

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
Faim actuel : **${buythingLowerCase[fla][1] + se[0].faim}**
Il vous reste : ***${se[0].money - buythingLowerCase[fla][0]}**$*`,
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: `©ToniPortal`
                            }
                        }
                        ]
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
            default:
                return message.channel.send({
                    embeds: [{
                        color: colors.defaut,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: `Money!`,
                        description: `Veuillez choisir quoi faire au canard : \n * - money\n- buy * `,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                        }
                    }
                    ]
                })
                break;
        }


    } catch (error) {
        console.warn('Erreur total de la commande duck ! :', error);
    } finally {
        connection.release(); // Libérer la connexion
    }


};
