import React from "react";
import { PublicRoutes } from "./components";
import './assets/styles/style.css'
import './assets/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    
    removeShowClass();
    window.scrollTo(0, 0);

  }, [location.pathname]); 

  const removeShowClass = () => {
    
    const offcanvasElement = document.querySelector('.offcanvas-end');
    const offcanvasElement1 = document.querySelector('.offcanvas-backdrop');
    var bodyElement = document.body;

    if (bodyElement) {
        bodyElement.removeAttribute('style');
    }

    if (offcanvasElement) {
        offcanvasElement.classList.remove('show');
    }

    if (offcanvasElement1) {
        offcanvasElement1.classList.remove('show');
    }
  };
  return <PublicRoutes />;
};

export default App;
