exports.run = async (client, message, args, colors) => {

    const rs = require('../node_modules/rocket-store');

    var idmembre = message.author.id;

    if (args == "del") {

        rs.delete();

    }




    await rs.options({
        data_storage_area: "./data/exp",
        data_format: rs._FORMAT_JSON,
    });
    result = await rs.get("exp", idmembre);

    console.log(result);

let ajoutexp = result.result[0].exp+1;

    await rs.post("exp", idmembre, {
        owner: message.author.username,
        exp: ajoutexp,
    });

    result = await rs.get("exp", idmembre);


    console.log(result);


}