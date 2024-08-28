// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onManageProductsClick, onManageOrdersClick, onCustomerServiceClick, onBackToDashboardClick }) => {
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li>
          <button onClick={onManageProductsClick}>Gestionar Productos</button>
        </li>
        <li>
          <button onClick={onManageOrdersClick}>Gestionar Pedidos</button>
        </li>
        <li>
          <button onClick={onCustomerServiceClick}>Servicio al Cliente</button>
        </li>
        <li>
          <button onClick={onBackToDashboardClick}>Volver al Panel de Empleado</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
