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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jointure`
--

LOCK TABLES `jointure` WRITE;
/*!40000 ALTER TABLE `jointure` DISABLE KEYS */;
INSERT INTO `jointure` VALUES (1,1,1),(2,1,7),(3,1,2),(4,2,6),(5,2,2),(6,3,7),(7,3,3),(8,4,2),(9,4,6),(10,5,1),(11,5,5),(12,5,6),(13,6,2),(14,7,4),(15,7,1),(16,7,2),(17,8,4),(18,9,3),(19,9,1),(20,9,7),(21,10,3),(22,10,5),(23,10,2),(24,11,6),(25,12,2),(26,13,5),(27,13,1),(28,14,5),(29,14,4),(30,14,2),(31,15,7),(32,15,1),(33,16,1),(34,17,6),(35,18,1),(36,18,7),(37,19,4),(38,19,4),(39,19,6),(40,20,7),(41,20,3);
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
  `nom` varchar(50) DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `marque` varchar(50) DEFAULT NULL,
  `concentration` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parfum`
--

LOCK TABLES `parfum` WRITE;
/*!40000 ALTER TABLE `parfum` DISABLE KEYS */;
INSERT INTO `parfum` VALUES (1,'Diorissima','Femme',110,'Christian Dior','Eau de Parfum'),(2,'Joy Dior','Femme',80,'Christian Dior','Eau de Parfum'),(3,'Platinium egoïste','Homme',55,'Chanel','Eau de Parfum'),(4,'L\'envol ','Homme',300,'Cartier','Eau de Parfum'),(5,'Balade Sauvage','Neutre',99,'Sauvage','Eau de Parfum'),(6,'Balmain Homme','Homme',40,'Balmain','Eau de Toilette'),(7,'Carbone','Homme',60,'Balmain','Eau de Toilette'),(8,'Ivoire','Femme',33,'Balmain','Eau de Parfum'),(9,'Eau d\'Ivoire','Femme',67,'Balmain','Eau de Toilette'),(10,'First','Femme',47,'Van Cleef & Arpels','Eau de Toilette'),(11,'Ambre Gris','Femme',79,'Balmain','Eau de Parfum'),(12,'Extatic Gold Musk','Femme',99,'Balmain','Eau de toilette'),(13,'La Panthère','Femme',46,'Cartier','Eau de toilette'),(14,'Moonlight Patchouli','Neutre',123,'Van Cleef & Arpels','Eau de toilette'),(15,'Rose Velours','Neutre',94,'Van Cleef & Arpels','Eau de Parfum'),(16,'Bois D\'amende','Neutre',45,'Van Cleef & Arpels','Eau de Parfum'),(17,'Double Rare','Neutre',35,'Guess','Eau de Parfum'),(18,'Guilty Black','Homme',37,'Gucci','Eau de toilette'),(19,'In New York','Femme',78,'Van Cleef & Arpels','Eau de Parfum'),(20,'Nomade','Femme',41,'Chloé','Eau de Parfum');
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
INSERT INTO `senteur` VALUES (1,'Aromatique'),(2,'Boisée'),(3,'Fleurie'),(4,'Fougère'),(5,'Fruitée'),(6,'Orientale'),(7,'Agrumes');
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

-- Dump completed on 2024-01-17 16:40:52
