import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import ContatoPage from './pages/ContatoPage'
import Pessoas from './pages/Pessoas'
import MainLayout from './layout/MainLayout'
import ProductLayout from './layout/ProductLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>        
          <Route path='home' element={<HomePage />} />
          <Route path='sobre' element={<SobrePage />} />
          <Route index element={<ContatoPage />} />
          <Route path='contato' element={<ContatoPage />} />
          <Route path='pessoas' element={<Pessoas />} /> {}
        </Route>

        <Route path='produto' element={<ProductLayout />}>    
          <Route index element={<h2>Descrição</h2>} />
          <Route path='descricao' element={<h2>Descrição</h2>} />
          <Route path='preco' element={<h2>Preço</h2>} />
        </Route>

        <Route path='*' element={<div>Tela de erro - Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
