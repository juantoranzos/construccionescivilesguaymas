import React from 'react'
import Map from './Map'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'

export const Contacto = () => {
  return (
    <section id="contacto" className='d-block' style={{ backgroundColor: '#043055' }}>
      <div className='p-2'>
        <h2 className='text-center text-white display-5 p-5'>Consultas y presupuestos</h2>
        <p className='text-center  text-white fs-3'><span>Nuestro servicio es 365 días al año. Contáctanos o solicita un presupuesto utilizando el formulario y te responderemos a la brevedad.</span></p>
      </div>
    <Container fluid  className="d-flex align-items-center p-2 m-2 pb-5" style={{ backgroundColor: '#043055' }}>
      <Row className="w-100">
        <Col lg={6} md={12} className="d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          <Map />
        </Col>

        <Col lg={6} md={12} className="d-flex justify-content-center align-items-center">
          <div className=" p-4 shadow-lg w-100"   style={{ borderRadius: '15px', backgroundColor: '#fff' }}>
            <h2 className="text-center text-dark mb-4" style={{ fontWeight: '600' }}>Formulario de Contacto</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Nombre" className="shadow-sm" style={{ borderRadius: '10px' }} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" className="shadow-sm" style={{ borderRadius: '10px' }} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Empresa" className="shadow-sm" style={{ borderRadius: '10px' }} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Describa su proyecto" className="shadow-sm" style={{ borderRadius: '10px' }} required />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="w-50 shadow btn-lg" style={{ borderRadius: '10px', backgroundColor: '#043055', color: '#fff', fontWeight: '600' }}>Enviar datos</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
