import axios from 'axios'
// const baseUrl = "http://localhost:3000/api/notes";
// const baseUrl = "https://afternoon-plateau-39207.herokuapp.com/api/notes";
const baseUrl = '/api/notes'

let token = null
const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 1000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: false,
  }
  return request.then((response) => response.data.concat(nonExisting))
  // return request.then((response) => response.data);
}

const create = async (newObject) => {
  // authorize token
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.post(baseUrl, newObject, config)
  // without async
  // return request.then((response) => response.data)
  return request.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}
// Since the names of the keys and the assigned variables are the same, we can write the object definition with more compact syntax:
// from this to ES6 {
//   getAll: getAll,
//   create: create,
//   update: update
// }
//  to this

const fetchAll = {
  getAll,
  create,
  update,
  setToken,
}
export default fetchAll
