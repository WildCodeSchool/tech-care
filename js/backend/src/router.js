const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const parfumControllers = require("./controllers/parfumControllers");

router.post("/recos", parfumControllers.getRecos);

router.get("/senteurs/parfums/:id", parfumControllers.getSenteursParfum);

router.get("/parfums/:id", parfumControllers.getParfum);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);
// Route to add a new item
// router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
