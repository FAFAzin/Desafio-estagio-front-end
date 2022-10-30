import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//pages 
import Interface from './Components/Interface';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Interface />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
