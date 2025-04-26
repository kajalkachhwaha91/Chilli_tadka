import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';


function App() {
  return (
    

<Router>
<Header/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} /> 
</Routes>
<Footer/>
</Router>
  );
}

export default App;
