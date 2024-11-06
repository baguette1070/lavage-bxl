const express = require('express');
const cors = require('cors'); // Assure-toi d'activer CORS si ton front-end est sur un domaine différent.
const mysql = require('mysql');

const app = express();
const PORT = 3001;

// Middleware pour permettre les requêtes CORS
app.use(cors());

// Middleware pour parser les données du formulaire en JSON
app.use(express.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lavage-auto-db"
});

db.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données:", err);
        return;
    }
    console.log("Connexion à la base de données réussie !");
});

// Route GET pour vérifier que le serveur fonctionne
app.get("/", (req, res) => {
    res.send(`<h1 align="center" className="bg-couleur-titre rounded-3xl text-gray-300">Serveur en ligne</h1>`);
});

// Route POST pour insérer les données dans la base de données
app.post('/', (req, res) => {
    const sql = "INSERT INTO `lavage-auto` (`nom`, `email`, `message`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.message
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur d'insertion dans la base de données:", err.message);  // Affiche l'erreur dans la console
            return res.status(500).json({ message: 'Erreur lors de l\'insertion des données dans la base de données.' });
        }

        console.log("Données insérées avec succès :", result);
        return res.status(200).json({ message: 'Données insérées avec succès !' });
    });
});

// Démarrer le serveur sur le port 3001
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
