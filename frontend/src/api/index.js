import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const saveMovie = payload => api.post(`/api/movies`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovie = (id, payload) => api.put(`/movies/${id}`, payload)
export const deleteMovie = id => api.delete(`/movies/${id}`)
export const getMovie = id => api.get(`/movies/${id}`)
/// search ?????

const apis = {
    saveMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
    getMovie,
}

export default apis;