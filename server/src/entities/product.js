const BaseEntity = require('./baseEntity');

class Product extends BaseEntity {

  /**
   * Get all Product And Items data based on page number.
   */
  static async getAll(data) {
    try {

      const totalProductResult = await global.sequelizeModels.MasterProducts.findAll({
        include: [
          { model: global.sequelizeModels.Products, as: 'masterProduct' },
        ]
      });

      const productPageResult = await global.sequelizeModels.MasterProducts.findAll({
        offset: Math.ceil(data.pageSize * data.page),
        limit: data.pageSize,
        include: [
          { model: global.sequelizeModels.Products, as: 'masterProduct' },
        ]
      });

      console.log(Math.ceil(totalProductResult.length / data.pageSize))
      return {
        totalPages: Math.ceil(totalProductResult.length / data.pageSize),
        productPageResult,
      };

    } catch (er) {
      console.error(er)
    }
  }

  /**
   * Create a relation between the Product & Entities based on data.
   * @param {object} data - Contain product & entities details value in the object.
   * @param {integer} productId - Master product table row id "productId"
   * @param {integer} entitiesId - Master entities table row id "entitiesId"
   */
  static async createProductEntitiesRelational(data) {
    try {

      const productResult = await global.sequelizeModels.Products.create({
        ...data,
      });

      return productResult;
    } catch (er) {
      console.error(er)
    }
  }

}

module.exports = Product;
