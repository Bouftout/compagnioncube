exports.run = (client, message, args) => {

    if (message.author.bot) return;
    const weather = require("weather-js");


    var location = message.content.substr(6);
    console.log(location)
    var unit = "C";
    try {
        weather.find({ search: location, degreeType: unit }, function (err, data) {
            if (err) {

                console.log(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
                message.reply("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location);

                console.log(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
                message.reply("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location);

            } else {

                data = data[0];
                message.reply("\n" + "**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");

            }
        });
    } catch (err) {

        console.log(Date.now(), "ERREUR", "Weather.JS a rencontré un p'tit probléme");
        message.reply("Mais ehhh pourquoi c'est cassé tristesse :(");

    }


};