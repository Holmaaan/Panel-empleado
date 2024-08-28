// src/components/OrderList.js
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([
    // Datos de ejemplo; en una aplicación real, estos datos provendrían de una API
    { id: 1, customerName: 'Juan Pérez', date: '2024-08-25', status: 'Enviado' },
    { id: 2, customerName: 'María Gómez', date: '2024-08-26', status: 'Pendiente' },
  ]);

  const [showViewModal, setShowViewModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowViewModal(true);
  };

  const handleCloseViewModal = () => setShowViewModal(false);

  const handleUpdateOrder = (order) => {
    setSelectedOrder(order);
    setNewStatus(order.status);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleSaveUpdate = () => {
    if (selectedOrder) {
      setOrders(orders.map(order =>
        order.id === selectedOrder.id ? { ...order, status: newStatus } : order
      ));
      setShowUpdateModal(false);
    }
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este pedido?')) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  return (
    <div className="order-list">
      <h2>Pedidos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Cliente</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <Button variant="info" onClick={() => handleViewOrder(order)}>Ver</Button>
                <Button variant="warning" className="ml-2" onClick={() => handleUpdateOrder(order)}>Actualizar</Button>
                <Button variant="danger" className="ml-2" onClick={() => handleDeleteOrder(order.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal para ver detalles del pedido */}
      <Modal show={showViewModal} onHide={handleCloseViewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <div>
              <p><strong>ID:</strong> {selectedOrder.id}</p>
              <p><strong>Nombre del Cliente:</strong> {selectedOrder.customerName}</p>
              <p><strong>Fecha:</strong> {selectedOrder.date}</p>
              <p><strong>Estado:</strong> {selectedOrder.status}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseViewModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para actualizar el estado del pedido */}
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Estado del Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <Form>
              <Form.Group controlId="formOrderStatus">
                <Form.Label>Estado del Pedido</Form.Label>
                <Form.Control
                  type="text"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>Cancelar</Button>
          <Button variant="primary" onClick={handleSaveUpdate}>Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderList;
