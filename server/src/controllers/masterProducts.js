const express = require('express');
const router = express.Router();

const Entities = require('../entities');

/**
 * Get all the master product API Call
 */
router.get('/getall', async (req, res) => {
  try {

    const masterProductResult = await Entities.masterProducts.getAll();

    return res.json({ success: true, data: masterProductResult });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Something Went Wrong' });
  }
});

module.exports = router;