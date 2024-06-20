import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Elegirnos = () => {
    return (
        <div className="d-flex flex-column pt-5 min-vh-100 bg-light">
            <Container className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                <Col xs={12} md={6} className="p-0 shadow">
                    <img
                        src="../public/img/nieve2.jpeg"
                        alt="Exhibition"
                        style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
                        className="w-100"
                    />
                </Col>
                <Col xs={12} md={7} className="text-white p-4 cambio">
                    <div className="p-4 div">
                        <h2 id="elegirnos" className="text-3xl font-bold mb-4 text-center">¿Por Qué Elegir Guaymás Construcciones Civiles?</h2>
                        <p id='texto' className="mb-4 text-justify">
                            No solo somos un proveedor de materiales, sino también un proveedor de soluciones de servicio completo.
                            Contamos con una amplia experiencia en proyectos de todo tipo y tamaño.
                        </p>
                        <div className='text-center'>
                            <Button id='boton' variant="outline-light" className="glow-button text-white w-50 mt-2 p-3 font-bold shadow" as={Link} to="/about">
                                Acerca de Nosotros
                            </Button>
                        </div>



                    </div>
                </Col>
            </Container>
        </div>
    );
};
