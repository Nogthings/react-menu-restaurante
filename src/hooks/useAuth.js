import clienteAxios from "../config/axios";
import { API_ENDPOINT } from "../services/api";

export const useAuth = ({middleware, url}) => {

    const login = async(datos, setErrores) => {
        try {
            const {data} = await clienteAxios.post(API_ENDPOINT.LOGIN , datos)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([])
        } catch (error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }

    const registro = () => {
        
    }

    const logout = () => {
        
    }

    return {
        login,
        registro,
        logout
    }

}