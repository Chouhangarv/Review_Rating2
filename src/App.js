import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/user/Login';
import Sign from './Component/user/Sign';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
       
      </Routes>
    </BrowserRouter>    
    </div>
  
  );
}

export default App;
