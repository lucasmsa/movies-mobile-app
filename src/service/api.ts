import axios from 'axios'

const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3/";

export const api = axios.create({ baseURL: MOVIE_DB_BASE_URL });