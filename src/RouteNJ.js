const express = require('express');
const port = 8081;
const mysql = require('mysql2');
const app = express(); // Utilisez 'mysql2/promise' pour prendre en charge les Promises
const cors = require('cors');
app.use(cors());

app.use(express.json())


async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3307',
      password: '',
      database: 'jeu_enquete',
      Promise: mysql.Promise
    });
    console.log('Connexion à la base de données MySQL établie');
    return connection;
  } catch (err) {
    console.error('Erreur lors de la connexion à la base de données :', err);
    throw err;
  }
}

function executeQuery(connection,query) {
    return new Promise((resolve, reject) => {
  connection.query(query, function (err, result){
   if (err) {
    reject(err);
    return;
   }
   
  resolve(result);
   return result ;
  
});
});
}

/////////////////////////partie express///////////////////////////////////

app.get('/Start', async (req, res) => {
  const connection = await connectToDatabase();
  const query ="SELECT IDMetier ,NomMetier FROM métier";
  try {
    const data = await executeQuery(connection, query);
    const métiers = data.map((métier) => ({
        IDMetier: métier.IDMetier,
        NomMetier: métier.NomMetier,
    }));
    return res.json(métiers);
  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err);
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});
app.get('/Start/:nom', async (req, res) => {
  const connection = await connectToDatabase();
  const nom = req.params.nom;
  const query =`SELECT Nom,Description,NomMetier,Photo,ID_Metier FROM personnages INNER JOIN métier ON IDMetier = ID_Metier WHERE NomMetier = '${nom}'`;
  try {
    const data = await executeQuery(connection, query);
    const personnes = data.map((personne) => ({
        Nom: personne.Nom,
        Description: personne.Description,
        NomMetier: personne.NomMetier,
        Photo: personne.Photo,
        IDPersonnage: personne.id,
    }));
    return res.json(personnes);
  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err);
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});



app.get('/Answer', async (req, res) => {
  const connection = await connectToDatabase();
  
  const query =`SELECT Nom,Description,Photo FROM personnages WHERE Nom = 'Jules'`;
  try {
    const data = await executeQuery(connection, query);
    const personnes = data.map((personne) => ({
        Nom: personne.Nom,
        Description: personne.Description,
        Photo: personne.Photo,
        
    }));
    return res.json(personnes);
  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err);
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});


app.post('/Reponse', async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const formData = req.body;
   
    // Utiliser une requête paramétrée pour éviter l'injection SQL
    const query = `INSERT INTO reponse (Reponse) VALUES ('${formData.Reponse}')`;
    await executeQuery(connection, query);

    // Envoyer une réponse de succès
    res.status(200).json({ message: 'Data received successfully' });
  } catch (error) {
    // Gérer les erreurs
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
  
 
app.delete('/Answer', async (req, res) => {
  try {
    const connection = await connectToDatabase();
    // Vous n'avez pas besoin de req.body pour une requête DELETE

    const query = `DELETE FROM reponse`;
    await executeQuery(connection, query);

    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//elle marche 
app.post('/Compte', async (req, res) => {
  try {
const connection = await connectToDatabase();
    const formData = req.body; 
console.log(formData);

 const query = `INSERT INTO authentification (Mail, PassWord) VALUES ('${formData.Email}', '${formData.Password}')`;
 console.log(query);
    await executeQuery(connection, query);

    res.status(200).json({ message: 'Data received successfully' });
 } catch (error) {
console.error('Error:', error);
 res.status(500).json({ error: 'Internal Server Error' });
   }
 });
 

 app.get('/Authentification', async (req, res) => {
  const connection = await connectToDatabase();
  const formData = req.params.Mail;
  console.log(formData)

  const query =`SELECT Mail FROM authentification`;
  try {
    const data = await executeQuery(connection, query);
    const authentification = data.map((authentification) => ({
      Mail: authentification.Mail,
    }));
    return res.json(authentification);
  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err);
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});
 //elle marche pas encor

app.listen(port, () => {
    console.log('Le serveur est en cours d\'exécution sur http://localhost:8081');
  });