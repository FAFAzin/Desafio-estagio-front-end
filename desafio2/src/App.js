import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//pages 
import Dados from './Components/Dados';
import SearchContry from './Components/SearchCountryCity'
import Teste from './Components/teste';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dados />} />
          <Route path='/places' element={<SearchContry />} />
          <Route path='/teste' element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
