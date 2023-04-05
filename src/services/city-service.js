const { CityRepository } = require("../repositories/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (err) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (err) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
  async updateCity() {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (err) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
  async getCity() {
    const city = await this.cityRepository.getCity(cityId);
    return city;
    try {
    } catch (err) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
}
