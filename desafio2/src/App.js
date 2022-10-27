import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';

//pages 
import Dados from './Components/Dados';
import Teste from '../src/Teste/teste'



function App() {
  return (
    <div className="App">
      <h1>Projeto 2</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dados />} />
          <Route path='/place' element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
