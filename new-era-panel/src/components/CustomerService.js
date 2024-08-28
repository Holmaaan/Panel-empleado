// src/components/CustomerService.js
import React from 'react';
import './CustomerService.css';

const CustomerService = () => {
  return (
    <div className="customer-service">
      <h2>Servicio al Cliente</h2>
      <p>Si necesitas ayuda, puedes contactarnos a través de los siguientes medios:</p>
      <ul>
        <li>Email: soporte@empresa.com</li>
        <li>Teléfono: +123 456 7890</li>
        <li>WhatsApp: +123 456 7890</li>
        <li>Horario de atención: Lunes a Viernes, de 9:00 a 18:00</li>
      </ul>
    </div>
  );
};

export default CustomerService;
