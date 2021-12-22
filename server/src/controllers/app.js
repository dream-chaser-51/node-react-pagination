const express = require('express');

const masterEntitiesRouter = require('./masterEntities');
const productRouter = require('./product');
const masterProductRouter = require('./masterProducts');

function init() {
  const router = express.Router();
  
  global.appLogger('Initializing application routes');
  router.use('/master-entities', masterEntitiesRouter);
  router.use('/product', productRouter);
  router.use('/master-product', masterProductRouter);

  return router;
}

module.exports = init;
