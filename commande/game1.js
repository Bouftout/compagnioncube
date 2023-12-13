exports.run = (client, message, args, colors) => {

    let tours = 0;

    function random(min, max) { //juste un random normal
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    class createPlayer {
        constructor(nom, age) {
            this.nom = nom;
            this.age = age;
        }

        // Méthode de la classe
        sePresenter() {
            console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
        }
    }




} //fin commande