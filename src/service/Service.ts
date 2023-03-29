import axios from "axios";
import { url } from "inspector";
import Login from '../paginas/login/Login';

export const api = axios.create({
    baseURL: 'https://vidaplan.onrender.com'
})

export const cadastroUsuario = async(url: string, dados: Object, setDados: Function)=>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
export const login = async(url: string, dados: Object, setDados: Function)=>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
export const busca = async(url: string, setDados: Function, headers: Object)=>{
    const resposta = await api.get(url, headers)
    setDados(resposta.data)
}
export const buscaId = async(url: string, setDados: Function, headers: Object)=>{
    const resposta = await api.get(url, headers)
    setDados(resposta.data)
}
export const post = async(url: string, dados: Object, setDados: Function, headers: Object)=>{
    const resposta = await api.post(url, dados, headers)
    setDados(resposta.data)
}
export const put = async(url: string, dados: Object, setDados: Function, headers: Object)=>{
    const resposta = await api.put(url, dados, headers)
    setDados(resposta.data)
}
export const deleteId = async(url: string, headers: Object)=>{
    await api.delete(url, headers)
}