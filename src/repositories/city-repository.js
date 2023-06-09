const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      console.log("something went wrong in repo layer");
      throw { err };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      console.log("something went wrong in repo layer");
      throw { err };
    }
  }
  async updateCity(cityId, data) {
    try {
      // below approach also works but do not return updated object
      //   const city = await City.update(data, {
      //     where: {
      //       id: cityId,
      //     },

      //   });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (err) {
      console.log("something went wrong in repo layer");
      throw { err };
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (err) {
      console.log("something went wrong in repo layer");
      throw { err };
    }
  }

  async getAllCities(filter) {
    //filter can be empty also
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
