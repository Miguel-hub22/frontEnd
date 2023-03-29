import Categorias from './Categorias';
import Usuario from './Usuario';

interface Produtos{
    id: number;
    nome: string
    descricao: string
    preco: number
    embalagem: string
    dicasPlantacao: string
    regiao: string
    categorias: Categorias | null
    usuario?: Usuario | null
}

export default Produtos