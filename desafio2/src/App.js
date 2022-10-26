import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';

//pages 
import Dados from './pages/Dados';
import Localizacao from './pages/Localizacao';



function App() {
  return (
    <div className="App">
      <h1>Projeto 2</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dados />} />
        <Route path='/localizacao' element={<Localizacao />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
