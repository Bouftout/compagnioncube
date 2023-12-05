exports.run = (client, message, args, colors) => {


    const SnakeGame = require('snakecord');


    const snakeGame = new SnakeGame({

        title: 'Snake Game',

        color: "GREEN",

        timestamp: false,

        gameOverTitle: "Game Over"

    });


    snakeGame.newGame(message);



}