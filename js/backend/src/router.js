const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const parfumControllers = require("./controllers/parfumControllers");


router.post("/recos", parfumControllers.getRecos);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);
// Route to add a new item
// router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
