import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ProductForm from './ProductForm';
import OrderList from './OrderList'; 
import CustomerService from './CustomerService'; // Importa el nuevo componente
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const Dashboard = () => {
  const [showProductForm, setShowProductForm] = useState(false);
  const [showOrderList, setShowOrderList] = useState(false); 
  const [showCustomerService, setShowCustomerService] = useState(false); // Nuevo estado para mostrar servicio al cliente
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Define las funciones que faltaban
  const handleProductAdded = (product) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  const handleProductUpdated = (updatedProduct) => {
    setProducts(products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setEditingProduct(null);
  };

  const handleProductDeleted = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleManageProductsClick = () => {
    setShowProductForm(true);
    setShowOrderList(false);
    setShowCustomerService(false);
  };

  const handleManageOrdersClick = () => {
    setShowProductForm(false);
    setShowOrderList(true);
    setShowCustomerService(false);
  };

  const handleCustomerServiceClick = () => {
    setShowProductForm(false);
    setShowOrderList(false);
    setShowCustomerService(true);
  };

  const handleBackToDashboard = () => {
    setShowProductForm(false);
    setShowOrderList(false);
    setShowCustomerService(false);
    setEditingProduct(null);
  };

  return (
    <div className="dashboard">
      <Sidebar
        onManageProductsClick={handleManageProductsClick}
        onManageOrdersClick={handleManageOrdersClick}
        onCustomerServiceClick={handleCustomerServiceClick} // Añadir manejador
        onBackToDashboardClick={handleBackToDashboard}
      />
      <Container className="content">
        <Row>
          <Col>
            <h1>Panel de Empleado</h1>
            {!showProductForm && !showOrderList && !showCustomerService ? (
              <div className="dashboard-content">
                <p>Bienvenido al panel de empleado. Seleccione una opción del menú para comenzar.</p>
              </div>
            ) : showProductForm ? (
              <>
                <ProductForm
                  onProductAdded={handleProductAdded}
                  products={products}
                  onProductUpdated={handleProductUpdated}
                  onProductDeleted={handleProductDeleted}
                  editingProduct={editingProduct}
                  setEditingProduct={setEditingProduct}
                />
                <div className="product-list">
                  <h2>Productos</h2>
                  <ul className="list-unstyled">
                    {products.map((product) => (
                      <li key={product.id} className="mb-4">
                        <Card className="product-card">
                          <Row>
                            <Col md={4}>
                              <Card.Img variant="top" src={product.imageUrl} />
                            </Col>
                            <Col md={8}>
                              <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text><strong>Precio:</strong> ${product.price}</Card.Text>
                                <Button variant="success" onClick={() => setEditingProduct(product)}>Editar</Button>
                                <Button variant="danger" className="ml-2" onClick={() => handleProductDeleted(product.id)}>Eliminar</Button>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : showOrderList ? (
              <OrderList />
            ) : showCustomerService ? (
              <CustomerService />
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
