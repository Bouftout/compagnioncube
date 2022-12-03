const axios = require("axios");

exports.run = (client, message, args, colors) => {


    axios
        .get("https://api.coinbase.com/v2/exchange-rates?currency=BTC")
        .then(response => {

            const info = response.data.data.rates;
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
                url: `https://api.coinbase.com`,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: `**BITCOIN**`,
                description: `${valueUSD}, soit ${valueEUR}`,
                timestamp: new Date(),
                image: {
                    url: `https://cdn6.aptoide.com/imgs/6/7/d/67da2c96adfc7dca9614752529d80630_icon.png?w=240`,
                },
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                }
            }

            message.channel.send({ embeds: [embed] })
        })
        .catch(error => error);
}

exports.help = {
    usage: ``,
    description: `Pour affichier la valeur actuelle du bitcoin`
};