const express = require('express');
const router = express.Router();

const Entities = require('../entities');

/**
 * Get all the master entities API Call
 */
router.get('/getall', async (req, res) => {
  try {

    const entityResult = await Entities.masterEntities.getAllEntities();

    return res.json({ success: true, data: entityResult });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Something Went Wrong' });
  }
});

/**
 * Create a entities API call
 * @param {string} name - entities name.
 */
router.post('/', async (req, res) => {
  try {

    const entityDetail = req.body;
    
    await Entities.masterEntities.createEntities(entityDetail);

    return res.json({ success: true, message: "Entities created successfully" });

  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Something Went Wrong' });
  }
});

/**
 * Update a entities "PUT" method API call
 * @param {integer} id - entities primary id for update entities row record.
 * @param {string} name - entities name.
 */
router.put('/:id', async (req, res) => {
  try {
    
    const entityDetail = req.body;
    entityDetail.id = req.params.id;

    await Entities.masterEntities.updateEntitiesById(entityDetail);

    return res.json({ success: true, message: "Entities updated successfully" });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Something Went Wrong' });
  }
});

/**
* Individual entities details "GET" method API call
* @param {integer} id - Get by primary id.
*/
router.get('/:id', async (req, res) => {
  try {
    const entitiesResult = await Entities.masterEntities.getById({
      id: req.params.id,
    });
    return res.json({ success: true, data: entitiesResult });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Something Went Wrong' });
  }
});

/**
* Entities soft delete "DELETE" method API call
* @param {integer} id - delete by primary id.
*/
router.delete('/:id', async (req, res) => {
  try {
    const entitiesResult = await Entities.masterEntities.deleteById({
      id: req.params.id,
    });
    return res.json({ success: true, message: 'Entities deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Something Went Wrong' });
  }
});

module.exports = router;
