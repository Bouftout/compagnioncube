const fetch = require("node-fetch");

exports.run = async (client, message, args, colors) => {
    try {

        if (!args[1]) {
            args[1] = "BTC";
        }

        const response = await fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${args[1]}`);
        const data = await response.json();

        const info = data.data.rates;
        const valueUSD = Number(info.USD).toLocaleString("fr-FR", {
            style: "currency",
            currency: "USD",
        });
        const valueEUR = Number(info.EUR).toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
        });

        const embed = {
            color: colors.ok,
            url: "https://api.coinbase.com",
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL(),
            },
            title: "**BITCOIN**",
            description: `${valueUSD}, soit ${valueEUR}`,
            timestamp: new Date(),
            image: {
                url: "https://cdn6.aptoide.com/imgs/6/7/d/67da2c96adfc7dca9614752529d80630_icon.png?w=240",
            },
            footer: {
                icon_url: client.user.avatarURL(),
                text: "©ToniPortal",
            },
        };

        message.channel.send({ embeds: [embed] });

    } catch (error) {
        console.warn(error);
        message.reply("Une erreur s'est produite lors de la récupération des données.");
    }
};

exports.help = {
    usage: `<quel monnaie>`,
    description: `Pour afficher la valeur actuelle du bitcoin`,
};
