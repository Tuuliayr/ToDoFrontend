import axios from "axios";

axios.defaults.baseURL = "https://tamk-4a00ez62-3001-group10.herokuapp.com/api";
// axios.defaults.baseURL = "http://localhost:8080/api";

class axiosMethods {
  static async submitList(name) {
    try {
      const response = await axios.post("/list", { name: name });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  static async post(url, data) {
    try {
      const response = await axios.post(url, data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  static async get(url) {
    try {
      const response = await axios.get(url);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static async patch(url, data) {
    try {
      const response = await axios.patch(url, data);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static async delete(url) {
    try {
      const response = await axios.delete(url);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
}

export default axiosMethods;
