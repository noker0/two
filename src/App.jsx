import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Pages from './Component/Pages/Pages';
import Forma from './Forma';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/b' element={<Home/>}/>
        <Route path='/a' element={<Pages/>}/>
        <Route path='/c' element={<Forma/>}/>
        </Routes>
    </div>
  );
}

export default App;