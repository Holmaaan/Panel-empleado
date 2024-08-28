// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import ProductForm from './components/ProductForm';
import './App.css'; // Asegúrate de incluir cualquier CSS global aquí
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/manage-products"
            element={
              <div className="d-flex">
                <Sidebar />
                <div className="flex-fill p-3">
                  <ProductForm
                    // Puedes pasar props aquí si es necesario
                  />
                </div>
              </div>
            }
          />
          {/* Puedes agregar más rutas aquí según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
