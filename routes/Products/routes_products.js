const { Pool } = require('pg');

const { Router } = require('express');
const router = Router();
// Traer todos los controladores de esta carpeta 
const getProducts = require("./Controllers/getProducts");

router.get('/users', getProducts);

module.exports = router;