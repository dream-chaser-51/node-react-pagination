const BaseEntity = require('./baseEntity');

class masterEntities extends BaseEntity {

  /**
   * Get all the product master entities.
   */
  static async getAllEntities() {
    try {
      const entitiesResult = await global.sequelizeModels.MasterEntities.findAll();
      return entitiesResult;
    } catch (er) {
      console.error(er)
    }
  }

  /**
   * Create a Entities based on data.
   * @param {object} data - Contain Entities details value in the object.
   * @param {string} name - Entities name
   */
  static async createEntities(data) {
    try {

      const entitiesResult = await global.sequelizeModels.MasterEntities.create({
        ...data,
      });

      return entitiesResult;
    } catch (er) {
      console.error(er)
    }
  }

  /**
   * Update a Entities based on data.
   * @param {object} data - Contain Entities details value in the object.
   * @param {integer} id - Current entities id
   * @param {string} name - Entities name
   */
  static async updateEntitiesById(data) {
    try {

      await global.sequelizeModels.MasterEntities.update({
        ...data,
      }, {
        where: {
          id: data.id,
        }
      });

      return;

    } catch (er) {
      console.error(er)
    }
  }

  /**
  * Get One Entities based on id.
  * @param {object} data - Contain entities "id" key value in the object.
  */
  static async getById(data) {
    try {
      const entitiesResult = await global.sequelizeModels.MasterEntities.findOne({
        where: {
          id: data.id,
        }
      });

      return entitiesResult;
    } catch (er) {
      console.error(er)
    }
  }


  /**
   * Delete Entities based on params id.
   * @param {object} data - Contain id key value in the object.
   */
  static async deleteById(data) {
    try {
      const entitiesResult = await global.sequelizeModels.MasterEntities.destroy({
        where: {
          id: data.id,
        },
      });

      return entitiesResult;
    } catch (er) {
      console.error(er)
    }
  }

}

module.exports = masterEntities;
