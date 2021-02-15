const express = require('express');


 const productoControllers = require('../controllers/productoController.js');

 /*Guardo la ejecución de router*/
 
 let router = express.Router();

  /*Acá van todas las rutas*/

 router.get('/detalle/:id', productoControllers.detalle);

   /*CREAR PRODUCTO*/
 router.get('/create', productoControllers.create);


   /*EDITAR PRODUCTO*/
 router.get('/edit', productoControllers.edit); 

  /*Exporto módulo para llevarlo al entry point*/

  module.exports = router;