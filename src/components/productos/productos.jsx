import React, { useState, useEffect } from "react";
import "./productos.sass";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Producto from '../producto/producto'


const Productos = ({ onError }) =>{
    const [prods, setProds] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('https://api-proyecto-dev.onrender.com/api/productos/', {
                    headers: {
                        'Token': `${token}`
                    }
                });

                const data = await response.json();

                if (response.ok) {
                    setProds(data);
                } else {
                    setErrorMessage(data.Mensaje);
                    onError();
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {prods.map((producto, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <Producto producto={producto} />
                    </Col>
                    ))}
                </Row>
            </Container>

            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}
        </>
    );
} 

export default Productos;