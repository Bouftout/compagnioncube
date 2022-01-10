const axios = require("axios");
const Discord = require("discord.js");

exports.run = (client, message, args) => {


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

            const richResponse = new Discord.MessageEmbed()
                .setColor("#f39c12")
                .addField("BITCOIN", `${valueUSD}, soit ${valueEUR}`)
                .setThumbnail("https://cdn6.aptoide.com/imgs/6/7/d/67da2c96adfc7dca9614752529d80630_icon.png?w=240")
                .setTimestamp();

            message.channel.send({
                embed: [richResponse]
            });
        })
        .catch(error => error);
}

exports.help = {
    usage: ``,
    description: `Pour affichier la valeur actuelle du bitcoin`
};