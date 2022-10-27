import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';

//pages 
import Dados from './Components/Dados';
import Country from './Components/Places/Country';



function App() {
  return (
    <div className="App">
      <h1>Projeto 2</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dados />} />
        <Route path='/places' element={<Country />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
