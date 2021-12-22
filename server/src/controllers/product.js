const express = require('express');
const router = express.Router();

const Entities = require('../entities');

/**
 * Get all the master product with master entities API Call
 */
router.get('/getall', async (req, res) => {
  try {

    const productDetail = req.body;
    productDetail.page = parseInt(req.query.page || "0");
    productDetail.pageSize = 5;
    const productResult = await Entities.products.getAll(productDetail);

    return res.json({ success: true, data: productResult });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Something Went Wrong' });
  }
});

/**
 * Create a relation between the Product & Entities based on data.
 * @param {integer} productId - Master product table row id "productId"
 * @param {integer} entitiesId - Master entities table row id "entitiesId"
 */
router.post('/', async (req, res) => {
  try {

    const productDetail = req.body;

    await Entities.products.createProductEntitiesRelational(productDetail);

    return res.json({ success: true, message: "Product and entities mapped successfully" });

  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Something Went Wrong' });
  }
});

module.exports = router;
