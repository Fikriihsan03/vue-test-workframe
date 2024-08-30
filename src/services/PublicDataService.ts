import axios from 'axios'

class PublicDataService {
  #baseApi = import.meta.env.VITE_VUE_APP_BASE_API

  #httpHeader(jwtToken: string) {
    return {
      headers: {
        Authorization: 'Bearer ' + jwtToken
      }
    }
  }


  getProvinces(jwtToken: string) {
    return axios.get(this.#baseApi + `/v1/public-data/provinces`, this.#httpHeader(jwtToken))
  }
}
const PublicDataServices = new PublicDataService()
export { PublicDataServices as default }
