"use script";
exports.run = (client, message, args, colors) => {

        //Jeu de carte contre bot

        const fs = require('fs');


        function attackoudef() {

            var raandom = random(1, 2)

            if (raandom == 1) {

                return "DEF"
            }
            if (raandom == 2) {

                return "ATK"
            }
        }



        function random(min, max) { //juste un random normal
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }




    } //fin commande