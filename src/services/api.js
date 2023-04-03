const BASE_URL = import.meta.env.VITE_API_URL;

export const API_ENDPOINT = {
    LOGIN: BASE_URL + '/api/login',
    REGISTER: BASE_URL + '/api/registro',
    CATEGORIAS: BASE_URL + '/api/categorias',
    PRODUCTOS: BASE_URL + '/api/productos',
};