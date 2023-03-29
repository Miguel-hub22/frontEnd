import Produtos from './Produtos';
interface Usuario{
    id: number;
    nome: string
    usuario: string
    cpf: string
    senha: string
    produtos?: Produtos[]
}

export default Usuario