-- MySQL dump 10.13  Distrib 8.2.0, for macos13 (arm64)
--
-- Host: localhost    Database: loreal
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jointure`
--

DROP TABLE IF EXISTS `jointure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jointure` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parfum_id` int NOT NULL,
  `senteur_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jointure_parfum_FK` (`parfum_id`),
  KEY `jointure_senteur_FK` (`senteur_id`),
  CONSTRAINT `jointure_parfum_FK` FOREIGN KEY (`parfum_id`) REFERENCES `parfum` (`id`),
  CONSTRAINT `jointure_senteur_FK` FOREIGN KEY (`senteur_id`) REFERENCES `senteur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jointure`
--

LOCK TABLES `jointure` WRITE;
/*!40000 ALTER TABLE `jointure` DISABLE KEYS */;
INSERT INTO `jointure` VALUES (1,1,2),(2,1,4),(3,2,4),(4,3,3),(5,3,2),(6,3,6),(7,4,2),(8,4,4),(9,5,2),(10,5,5),(11,6,7),(12,6,4),(13,7,2),(14,7,4),(15,8,1),(16,8,2),(17,8,3),(18,9,1),(19,9,2),(20,9,3),(21,10,4),(22,10,2),(23,11,2),(24,11,3),(25,11,4),(26,11,7),(27,12,7),(28,12,5),(29,13,4),(30,13,7),(31,14,5),(32,15,7),(33,15,4),(34,16,2),(35,16,5),(36,16,7),(37,17,7),(38,17,4),(39,18,4),(40,18,7),(41,19,6),(42,19,4),(43,19,7),(44,20,7),(45,20,4);
/*!40000 ALTER TABLE `jointure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parfum`
--

DROP TABLE IF EXISTS `parfum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parfum` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `genre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prix` int DEFAULT NULL,
  `marque` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `format` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parfum`
--

LOCK TABLES `parfum` WRITE;
/*!40000 ALTER TABLE `parfum` DISABLE KEYS */;
INSERT INTO `parfum` VALUES (1,'Lancôme - La Vie Est Belle','Femme',70,'Lancôme','Disponible en flacons de 30 ml, 50 ml, 75 ml, 100 ml','La Vie Est Belle est un parfum floral gourmand qui célèbre la joie de vivre. Il mêle des notes de poire, d\'iris et de patchouli pour créer une fragrance élégante et enchanteresse.','https://i.postimg.cc/pr3L3GCn/Lanc-me-La-Vie-Est-Belle.png'),(2,'Yves Saint Laurent - Black Opium','Femme',70,'Yves Saint Laurent','Disponible en flacons de 30 ml, 50 ml, 90 ml','Black Opium est un parfum oriental audacieux avec des notes de café, de vanille et de bois. Il incarne la sensualité et l\'énergie urbaine.','https://i.postimg.cc/fRK3916C/Yves-Saint-Laurent-Black-Opium.png'),(3,'Cacharel - Amor Amor','Femme',40,'Cacharel','Disponible en flacons de 30 ml, 50 ml, 100 ml','Amor Amor est un parfum fruité et floral, évoquant la passion et la jeunesse. Il comporte des notes de mandarine, de jasmin et de vanille.','https://i.postimg.cc/wT1RnWRT/Cacharel-Amor-Amor.png'),(4,'Viktor&Rolf - Flowerbomb','Femme',90,'Viktor&Rolf','Disponible en flacons de 30 ml, 50 ml, 100 ml','Flowerbomb est une explosion florale avec des notes de jasmin, de rose, d\'orchidée et de patchouli. C\'est un parfum opulent et féminin.','https://i.postimg.cc/wBqqYv4c/Viktor-Rolf-Flowerbomb.png'),(5,'Maison Margiela - Replica Beach Walk','Femme',95,'Maison Margiela','Disponible en flacons de 30 ml, 50 ml, 100 ml','Replica Beach Walk capture l\'essence d\'une journée ensoleillée à la plage avec des notes de coco, de bergamote et de musc.','https://i.postimg.cc/cJSKg09r/Maison-Margiela-Replica-Beach-Walk.png'),(6,'Helena Rubinstein - Wanted','Femme',70,'Helena Rubinstein','Disponible en flacons de 30 ml, 50 ml, 80 ml','Wanted est un parfum floral boisé qui évoque la confiance et la féminité. Il présente des notes de jasmin, de patchouli et de vanille.','https://i.postimg.cc/fRxyh1zZ/Helena-Rubinstein-Wanted.png'),(7,'Lancôme - Trésor','Femme',80,'Lancôme','Disponible en flacons de 30 ml, 50 ml, 100 ml','Trésor est un parfum romantique et féminin avec des notes de rose, d\'abricot et de vanille. Il symbolise l\'amour éternel.','https://i.postimg.cc/6qkWkfFy/Lancome-La-Nuit-Tr-sor.png'),(8,'Giorgio Armani Beauty - Si','Femme',80,'Giorgio Armani Beauty','Disponible en flacons de 30 ml, 50 ml, 100 ml','Si est un parfum moderne et féminin avec des notes de cassis, de freesia et de vanille. Il représente la féminité et la confiance.','https://i.postimg.cc/mPjhR1CK/Giorgio-Armani-Beauty-Si.png'),(9,'Yves Saint Laurent - Mon Paris','Femme',90,'Yves Saint Laurent','Disponible en flacons de 30 ml, 50 ml, 90 ml','Mon Paris est un parfum audacieux et sensuel avec des notes de fraise, de pivoine et de musc blanc. Il incarne la passion amoureuse.','https://i.postimg.cc/0r9k5y2s/Yves-Saint-Laurent-Mon-Paris.png'),(10,'Cacharel - Lou Lou','Femme',50,'Cacharel','Disponible en flacons de 30 ml, 50 ml, 100 ml','Lou Lou est un parfum oriental floral avec des notes de tubéreuse, d\'encens et de vanille. Il est audacieux et envoûtant.','https://i.postimg.cc/LJ2hr3Yz/Cacharel-Lou-Lou.png'),(11,'Ralph Lauren Fragrances - Romance','Femme',60,'Ralph Lauren Fragrances','Disponible en flacons de 30 ml, 50 ml, 100 ml','Romance est un parfum féminin floral avec des notes de gingembre, de rose et de musc. Il évoque la romance moderne.','https://i.postimg.cc/vDnBTN5r/Ralph-Lauren-Fragrances-Romance.png'),(12,'Giorgio Armani Beauty - Acqua Di Gio','Homme',70,'Giorgio Armani Beauty','Disponible en flacons de 50 ml, 100 ml, 200 ml','Acqua Di Gio est un parfum frais et aquatique qui capture l\'esprit de la mer méditerranéenne avec des notes d\'agrumes, de romarin et de bois.','https://i.postimg.cc/vxLw9j7T/Giorgio-Armani-Beauty-Acqua-Di-Gio.png'),(13,'Diesel - Only the Brave','Homme',50,'Diesel','Disponible en flacons de 35 ml, 50 ml, 75 ml','Only the Brave est un parfum boisé et oriental qui incarne la force et la confiance avec des notes de cuir, d\'ambre et de citron.','https://i.postimg.cc/VrnxQTVg/Diesel-Only-the-Brave.png'),(14,'Ralph Lauren Fragrances - Polo Blue','Homme',50,'Ralph Lauren Fragrances','Disponible en flacons de 40 ml, 75 ml, 125 ml','Polo Blue est un parfum frais et aquatique qui associe des notes de melon, de concombre et de patchouli. Il incarne la liberté et l\'énergie.','https://i.postimg.cc/Mnr2y1B7/Ralph-Lauren-Fragrances-Polo-Blue.png'),(15,'Viktor&Rolf - Spicebomb','Homme',80,'Viktor&Rolf','Disponible en flacons de 50 ml, 90 ml','Spicebomb est un parfum masculin épicé avec des notes de poivre, de safran et de cuir. Il représente la puissance et la séduction.','https://i.postimg.cc/7J4px9vk/Viktor-Rolf-Spicebomb.png'),(16,'Diesel - Fuel for Life','Homme',60,'Diesel','Disponible en flacons de 30 ml, 50 ml, 75 ml','Fuel for Life est un parfum énergique et sensuel avec des notes de lavande, de framboise et de bois de cèdre.','https://i.postimg.cc/dL6KVbtS/Diesel-Fuel-for-Life.png'),(17,'Maison Margiela - Replica Jazz Club','Homme',90,'Maison Margiela','Disponible en flacons de 30 ml, 50 ml, 100 ml','Replica Jazz Club évoque l\'atmosphère chaleureuse d\'un club de jazz avec des notes de tabac, de rhum et de vanille.','https://i.postimg.cc/FYKXdTYF/Maison-Margiela-Replica-Jazz-Club.png'),(18,'Giorgio Armani Beauty - Code Profumo','Homme',80,'Giorgio Armani Beauty','Disponible en flacons de 60 ml, 110 ml','Code Profumo est un parfum masculin oriental avec des notes de cuir, de safran et de bois. Il incarne la sophistication et la séduction.','https://i.postimg.cc/hh9BHzFn/Giorgio-Armani-Beauty-Code-Profumo.png'),(19,'Diesel - Spirit of the Brave','Homme',50,'Diesel','Disponible en flacons de 35 ml, 50 ml, 75 ml','Spirit of the Brave est un parfum masculin boisé avec des notes de cèdre, de vétiver et de vanille. Il symbolise la force et la détermination.','https://i.postimg.cc/1gnxM40L/Diesel-Spirit-of-the-Brave.png'),(20,'Yves Saint Laurent - La Nuit de L\'Homme','Homme',70,'Yves Saint Laurent','Disponible en flacons de 40 ml, 60 ml, 100 ml','La Nuit de L\'Homme est un parfum masculin boisé avec des notes de cardamome, de lavande et de cèdre. Il incarne la séduction et le mystère.','https://i.postimg.cc/vxvCDnM6/Yves-Saint-Laurent-La-Nuit-de-L-Homme.png');
/*!40000 ALTER TABLE `parfum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `senteur`
--

DROP TABLE IF EXISTS `senteur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `senteur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `senteur`
--

LOCK TABLES `senteur` WRITE;
/*!40000 ALTER TABLE `senteur` DISABLE KEYS */;
INSERT INTO `senteur` VALUES (1,'Fougère'),(2,'Fleurie'),(3,'Fruitée'),(4,'Orientale'),(5,'Aromatique'),(6,'Agrumes'),(7,'Boisée');
/*!40000 ALTER TABLE `senteur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'loreal'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-18 15:37:14
