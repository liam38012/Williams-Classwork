import 'antd/dist/antd.css';
import Header from './Components/header'
import Contact from './Routers/Contact';
import About from './Routers/About';
import Home from './Routers/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App(){
  return (
    <>
    <Router>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

    </Router>
      
      

    </>
  );
}

export default App;