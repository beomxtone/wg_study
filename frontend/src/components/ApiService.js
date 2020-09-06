import axios from 'axios';

const BASE_URL = "http://localhost:8080";

class ApiService {

  main() {
    return axios.get(BASE_URL + '/' + 'main');
  }

  selectChamp(champName) {
    return axios.get(BASE_URL + '/' + champName);
  }

}

export default new ApiService();