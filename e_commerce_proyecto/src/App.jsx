import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*NOTA CAMBIAR LOS NOMBRES Y RUTAS DE LOS COMPONENTES PARA QUE FUNCIONE*/
import Menu from './components/NavMenu/NavMenu';
import Prods from './components/productos/productos';
import Login from './components/Componentes/inicioSesion';
import Registro from './components/Componentes/Registro';
import Footer from './components/footer/footer';
import Buy from './components/FormularioCompra/FormularioCompra';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleError = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Menu onLoginClick={() => setLoggedIn(false)} onSignInClick={() => setLoggedIn(false)} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/productos" element={<Prods onError={handleError} />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/checkout" element={<Buy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;