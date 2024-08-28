// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductForm.css';

const ProductForm = ({ onProductAdded, products, onProductUpdated, onProductDeleted, editingProduct, setEditingProduct }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');

  useEffect(() => {
    if (editingProduct) {
      setProductName(editingProduct.name);
      setProductDescription(editingProduct.description);
      setProductPrice(editingProduct.price);
      setProductImageUrl(editingProduct.imageUrl);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      onProductUpdated({ ...editingProduct, name: productName, description: productDescription, price: productPrice, imageUrl: productImageUrl });
    } else {
      onProductAdded({ name: productName, description: productDescription, price: productPrice, imageUrl: productImageUrl });
    }
    clearForm();
  };

  const clearForm = () => {
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductImageUrl('');
    setEditingProduct(null);
  };

  return (
    <div className="product-form">
      <h2>{editingProduct ? 'Editar Producto' : 'Añadir un Producto Nuevo'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductName">
          <Form.Label>Nombre del Producto</Form.Label>
          <Form.Control
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formProductDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formProductPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formProductImageUrl">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            value={productImageUrl}
            onChange={(e) => setProductImageUrl(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          {editingProduct ? 'Actualizar Producto' : 'Añadir Producto'}
        </Button>
        {editingProduct && <Button variant="light" type="button" className="ml-2" onClick={clearForm}>Cancelar</Button>}
      </Form>
    </div>
  );
};

export default ProductForm;
