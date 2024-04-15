import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Add from './Components/Pages/User/Add';
import Show from './Components/Pages/User/Show';
import Navbar from './Components/Layout/Navbar';
import Update from './Components/Pages/User/Update';
import Delete from './Components/Pages/User/Delete';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/user/add" element={<Add/>}></Route>
          <Route path="/user/show" element={<Show/>}></Route>
          <Route path="/user/update/:userId" element={<Update/>}></Route>
          <Route path="/user/delete/:userId" element={<Delete/>}></Route>

        </Routes>
      </BrowserRouter>
      </>
     
    </div>
  );
}

export default App;
