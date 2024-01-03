
Table des matières:
# Lancer le projet 
## Conception => Dictionnaire des données
### Modèle Conceptuel des Données (MCD)
#### Références
##### Remarques

#Lancer le projet
  Partie Font :
-Pour lancer le projet après avoir récupéré le projet :.
la commande 'npm run dev' pour lancer le projet et il me renvoie une URL pour moi qui est  'http://localhost:5173' (Metre l'URL dans son navigateur) pour aller sur la première page ensuite bien lancer son serveur Wamp avant et importez-les tables.
- dependence s'il y a un problème :
concurrently "^8.2.2"
cors "^2.8.5"
express "^4.18.2"
mysql2 "^3.6.5"
react "^18.2.0"
react-dom "^18.2.0"
react-router-dom "^6.20.1"
commande npm :
npm i concurrently@^8.2.2
npm i cors@^2.8.5
npm i express@^4.18.2
npm i mysql2@^3.6.5
npm i react@^18.2.0
npm i react-dom@^18.2.0
npm i react-router-dom@^6.20.1

Partie backend :
- A laide d un serveur local wamp  
veiller a import sois le fichier au Format Json ou CSV ou sql  =>
FORMAT JSON : 
[
{"type":"header","version":"5.1.1","comment":"Export to JSON plugin for PHPMyAdmin"},
{"type":"database","name":"jeu_enquete"},
{"type":"table","name":"authentification","database":"jeu_enquete","data":
[
{"PassWord":"test","ID_Authentification":"26","Mail":"test@gmail.com"}
]
}
,{"type":"table","name":"métier","database":"jeu_enquete","data":
[
{"IDMetier":"1","NomMetier":"maçon"},
{"IDMetier":"2","NomMetier":"Electricien"},
{"IDMetier":"3","NomMetier":"Peintre "},
{"IDMetier":"4","NomMetier":"Couvreur"},
{"IDMetier":"5","NomMetier":"Plonbier"}
]
}
,{"type":"table","name":"personnages","database":"jeu_enquete","data":
[
{"id_Personnage":"1","Nom":"Jean","ID_Metier":"1","Description":"\nI lost my hammer and my trowel","Photo":"\/public\/Photo\/Macon2.jpg"},
{"id_Personnage":"2","Nom":"Robert","ID_Metier":"2","Description":"halland was crazy last night","Photo":"\/public\/Photo\/Electricien1.jpg"},
{"id_Personnage":"4","Nom":"Jean pierre","ID_Metier":"2","Description":"I saw a man with a blue cap","Photo":"\/public\/Photo\/Electricien2.jpg"},
{"id_Personnage":"5","Nom":"Gégé","ID_Metier":"1","Description":"I saw Jean Pierre pouring into the jean crate","Photo":"\/public\/Photo\/Macon1.jpg"},
{"id_Personnage":"6","Nom":"Fred","ID_Metier":"3","Description":"at that moment I threw her dear to my mother","Photo":"\/public\/Photo\/Peintre1.jpg"},
{"id_Personnage":"7","Nom":"halland","ID_Metier":"3","Description":"I was with Robert","Photo":"\/public\/Photo\/Peintre2.jpg"},
{"id_Personnage":"8","Nom":"Sindy","ID_Metier":"4","Description":"he had a yellow vest","Photo":"\/public\/Photo\/Couvreur1.jpg"},
{"id_Personnage":"9","Nom":"Léo","ID_Metier":"4","Description":"threw with sindy","Photo":"\/public\/Photo\/Couvreur2.jpg"},
{"id_Personnage":"10","Nom":"Jules","ID_Metier":"5","Description":"I think it's a woman","Photo":"\/public\/Photo\/Plonbier1.jpg"},
{"id_Personnage":"11","Nom":"Matt","ID_Metier":"5","Description":"\nI saw a person with a shirt","Photo":"\/public\/Photo\/Plonbier2.jpg"}
]
}
,{"type":"table","name":"reponse","database":"jeu_enquete","data":
[

]
}
]

FORMAT CSV :

"PassWord","ID_Authentification","Mail"
"test","26","test@gmail.com"
"IDMetier","NomMetier"
"1","maçon"
"2","Electricien"
"3","Peintre "
"4","Couvreur"
"5","Plonbier"
"id_Personnage","Nom","ID_Metier","Description","Photo"
"1","Jean","1","I lost my hammer and my trowel","/public/Photo/Macon2.jpg"
"2","Robert","2","halland was crazy last night","/public/Photo/Electricien1.jpg"
"4","Jean pierre","2","I saw a man with a blue cap","/public/Photo/Electricien2.jpg"
"5","Gégé","1","I saw Jean Pierre pouring into the jean crate","/public/Photo/Macon1.jpg"
"6","Fred","3","at that moment I threw her dear to my mother","/public/Photo/Peintre1.jpg"
"7","halland","3","I was with Robert","/public/Photo/Peintre2.jpg"
"8","Sindy","4","he had a yellow vest","/public/Photo/Couvreur1.jpg"
"9","Léo","4","threw with sindy","/public/Photo/Couvreur2.jpg"
"10","Jules","5","I think it's a woman","/public/Photo/Plonbier1.jpg"
"11","Matt","5","I saw a person with a shirt","/public/Photo/Plonbier2.jpg"
"ID_Reponse","Reponse"

Format SQL:

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : sam. 23 déc. 2023 à 09:03
-- Version du serveur : 10.6.5-MariaDB
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jeu_enquete`
--

-- --------------------------------------------------------

--
-- Structure de la table `authentification`
--

DROP TABLE IF EXISTS `authentification`;
CREATE TABLE IF NOT EXISTS `authentification` (
  `PassWord` varchar(50) NOT NULL,
  `ID_Authentification` int(50) NOT NULL AUTO_INCREMENT,
  `Mail` varchar(200) NOT NULL,
  PRIMARY KEY (`ID_Authentification`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `authentification`
--

INSERT INTO `authentification` (`PassWord`, `ID_Authentification`, `Mail`) VALUES
('test', 26, 'test@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `métier`
--

DROP TABLE IF EXISTS `métier`;
CREATE TABLE IF NOT EXISTS `métier` (
  `IDMetier` int(11) NOT NULL,
  `NomMetier` varchar(20) NOT NULL,
  PRIMARY KEY (`IDMetier`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `métier`
--

INSERT INTO `métier` (`IDMetier`, `NomMetier`) VALUES
(1, 'maçon'),
(2, 'Electricien'),
(3, 'Peintre '),
(4, 'Couvreur'),
(5, 'Plonbier');

-- --------------------------------------------------------

--
-- Structure de la table `personnages`
--

DROP TABLE IF EXISTS `personnages`;
CREATE TABLE IF NOT EXISTS `personnages` (
  `id_Personnage` int(11) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `ID_Metier` int(7) NOT NULL,
  `Description` varchar(150) NOT NULL,
  `Photo` varchar(50) NOT NULL,
  PRIMARY KEY (`id_Personnage`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `personnages`
--

INSERT INTO `personnages` (`id_Personnage`, `Nom`, `ID_Metier`, `Description`, `Photo`) VALUES
(1, 'Jean', 1, '\nI lost my hammer and my trowel', '/public/Photo/Macon2.jpg'),
(2, 'Robert', 2, 'halland was crazy last night', '/public/Photo/Electricien1.jpg'),
(4, 'Jean pierre', 2, 'I saw a man with a blue cap', '/public/Photo/Electricien2.jpg'),
(5, 'Gégé', 1, 'I saw Jean Pierre pouring into the jean crate', '/public/Photo/Macon1.jpg'),
(6, 'Fred', 3, 'at that moment I threw her dear to my mother', '/public/Photo/Peintre1.jpg'),
(7, 'halland', 3, 'I was with Robert', '/public/Photo/Peintre2.jpg'),
(8, 'Sindy', 4, 'he had a yellow vest', '/public/Photo/Couvreur1.jpg'),
(9, 'Léo', 4, 'threw with sindy', '/public/Photo/Couvreur2.jpg'),
(10, 'Jules', 5, 'I think it\'s a woman', '/public/Photo/Plonbier1.jpg'),
(11, 'Matt', 5, '\nI saw a person with a shirt', '/public/Photo/Plonbier2.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
CREATE TABLE IF NOT EXISTS `reponse` (
  `ID_Reponse` int(11) NOT NULL AUTO_INCREMENT,
  `Reponse` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_Reponse`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

 ##Dictionnaire des données

Ressource            |		URL	                              |	 Méthodes HTTP   |	     Paramètres d'URL/Variations	  |	                              Commentaires                    |	
/                      (front) http://localhost:5173                 /                            /                      Acceil app et explication régle

/Start                 (back) http://localhost:8081/Start           GET                            /                       choix métier              
                       (front) http://localhost:5173/Start
             
/Start/:nom            (back) http://localhost:8081/Start/:nom      GET                          :nom                      affichage personne selon métier ex: param = Electricien
                       (front) http://localhost:5173/Start/:nom 

/Answer                (back) http://localhost:8081/Answer          GET                           /                        reponse de qui est le tueur 
                       (front) http://localhost:5173/Answer
             
/Reponse               (back) http://localhost:8081/Reponse         Post                          /                         donner la réponse que l on pense 
                       (front) http://localhost:5173/Reponse 
                       
/Answer                (back) http://localhost:8081/Answer         Delete                         /                         Suprimer tout les réponse qui existe dans la table 
                       (front) http://localhost:5173/Answer

/Compte                (back) http://localhost:8081/Compte         Post                           /                         créé un comprte
                       (front) http://localhost:5173/Compte
                         
/Authentification/:Mail    (back) http://localhost:8081//Authentification/:Mail                 :Mail                      j'ai tester une authentification par mail 
                           (front) http://localhost:5173/Authentification

### Modèle Conceptuel des Données (MCD) 

 table : Personenage => id_Personenage/Nom/ID_Metier/Description/Photo
 relaton : Personenage *   1 Reponse
 table : Reponse  =>     ID_Reponse /Reponse
 table : Méthier =>      IDMethier/NomMethier
 table : authentification => ID_authentification/ PassWord /Mail
#### Références
https://nodejs.org/en
https://expressjs.com/fr/
https://fr.legacy.reactjs.org/
Livre => Express in Action , Learning Node: Moving to the Server-Side
##### Remarques
J’ai beaucoup aimé ce projet car il est assez complet avec react et express, j&#39;ai pu
apprendre de nouvelles choses en react et node js et express tel que le passage de
paramètres, j'ai pu essayer des choses que je pense montrer en entreprise.





 
 
