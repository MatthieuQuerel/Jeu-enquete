/**
 * Export et test de la connexion à la base de données MySQL
 */

//Module mysql2 avec l'API des promesses
const mysql = require('mysql2/promise');


// conection a la base de données
async function connectToDatabase(){
    try{ 
         const connection = await mysql.connect({
             host: 'localhost',
             user: 'root',
             port: '3307',
           password: '',
           database: 'jeu_enquete',
         });
         console.log("Connection BDD ok")
         return connection;
    }catch (err) {
    console.error('Erreur lors de la connexion à la base de données :', err);
    throw err;
  }
}


// execution de des  requette 
const executeQuery=(connection,Requet)=>{
  try{
    return new Promise((resolve,reject) =>{
        connection.query(Requet,  (err, result)=>{
            if (err) {
             reject(err);
             return;
            }
            
           resolve(result);
            return result ;
           
         }); 
    })
  }catch(err){
    console.error('Erreur lors de l exe de la requette :', err);
    throw err;
  }
}
export default { connectToDatabase, executeQuery };