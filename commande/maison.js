const mysql = require('mysql2/promise');
const config = require("../config.json");

// Créer une connexion à la base de données
const pool = mysql.createPool({
    host: config.bdd.host,
    user: config.bdd.user,
    password: config.bdd.password,
    database: config.bdd.database,
    connectionLimit: config.bdd.max // Nombre maximum de connexions dans le pool
});


exports.run = async (client, message, args) => {

    try {
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.execute('SELECT * FROM shippoint');
        console.log('Résultats de la requête :', rows);
        connection.release(); // Libérer la connexion
    } catch (error) {
        console.error('Erreur lors de la requête à la base de données :', error);
    } finally {
        pool.end(); // Fermer le pool de connexions après utilisation
    }
};
