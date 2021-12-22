const BaseEntity = require('./baseEntity');

class Product extends BaseEntity {

  /**
   * Get all master product.
   */
  static async getAll() {
    try {

      const masterProductResult = await global.sequelizeModels.MasterProducts.findAll();

      return masterProductResult;

    } catch (er) {
      console.error(er)
    }
  }

}

module.exports = Product;
