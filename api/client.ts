import aspida from '@aspida/fetch'
import api from "../api/$api";

const client = api(aspida());

// await client.rest.posts._id_.$get
const apiClient = aspida(fetch, {
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default apiClient;