import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//pages 
import Dados from './Components/Dados';
import SearchContry from './Components/SearchCountryCity'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dados />} />
          <Route path='/places' element={<SearchContry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
