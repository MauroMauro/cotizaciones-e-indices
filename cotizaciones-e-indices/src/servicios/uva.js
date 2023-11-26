import axios from 'axios'

const baseUrl = 'https://criptoya.com/api/uva'



const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { 
  getAll
}

