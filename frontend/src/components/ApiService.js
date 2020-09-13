import axios from 'axios';

const BASE_URL = "http://localhost:8080";

class ApiService {

  main() {
    return axios.get(BASE_URL + '/' + 'main');
  }

  getCounter(champName) {
    return axios.get(BASE_URL + '/enemy/' + champName + '/counters');
  }

  getCC(champName) {
    return axios.get(BASE_URL + '/ally/' + champName + '/cc_skills');
  }

  getType(champName) {
    return axios.get(BASE_URL + '/ally/' + champName + '/types');
  }

  getSynergy(champName, line) {
    return axios.get(BASE_URL + '/ally/' + champName + '/' + line + '/synergies');
  }

}

export default new ApiService();