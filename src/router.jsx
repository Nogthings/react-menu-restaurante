import{ createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from "./layouts/AuthLayout";
import Inicio from './Views/Inicio'
import Login from './Views/Auth/Login'
import Register from './Views/Auth/Register'

const router = createBrowserRouter([
    { path: '/', element: <Layout/>, children: [
        {index:true, element: <Inicio/>}
    ] },
    { path: '/auth', element: <AuthLayout/>, children: [
        { index:true, element: <Login/>},
        { path:'/auth/registro', element: <Register/>}
    ]}
])

export default router