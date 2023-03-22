import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import UsuarioCadastro from './paginas/cadastro/UsuarioCadastro';
import { Provider } from 'react-redux';
import store from './store/Store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import CadastroCategorias from './components/categorias/cadastroCategorias/CadastroCategorias';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import CadastroProdutos from './components/produtos/cadastroProdutos/CadastrarProdutos';
import DeletarProdutos from './components/produtos/deletarProdutos/DeletarProdutos';
import Dicas from './paginas/dicas/Dicas';
import MyAppBar from './components/estaticos/navbar/Navbar';
import Colaboradores from './paginas/colaboladores/Colaboradores';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <MyAppBar />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/home'element={<Home />}/>
        <Route path='/login'element={<Login />}/>
        <Route path='/cadastro'element={<UsuarioCadastro />}/>
        <Route path='/categorias'element={<ListaCategorias />}/>
        <Route path='/cadastrocategorias/:id'element={<CadastroCategorias />}/>
        <Route path='/deletarcategorias/:id'element={<DeletarCategorias />}/>
        <Route path='/cadastrocategorias'element={<CadastroCategorias />}/>
        <Route path='/produtos'element={<ListaProdutos  />}/>
        <Route path='/cadastroprodutos'element={<CadastroProdutos />}/>
        <Route path='/cadastroprodutos/:id'element={<CadastroProdutos />}/>
        <Route path='/deletarprodutos/:id'element={<DeletarProdutos />}/>
        <Route path='/dicasplantacao'element={<Dicas />}/>
        <Route path='/colaboradores'element={<Colaboradores />}/>
        
      </Routes>
        <Footer />
    </Router>
    </Provider>
  );
}

export default App;
