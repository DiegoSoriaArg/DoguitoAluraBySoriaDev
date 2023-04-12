import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Page404 from './pages/page404';
import Header from './components/Header';
import Post from './pages/post';
import Categoria from './pages/Categoria';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/categoria/:id/*' element={<Categoria />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
