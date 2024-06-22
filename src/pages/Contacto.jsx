import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import baner from '../img/top-banner-img.jpg'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Map from '../components/Map'


export const Contacto = () => {
  return (
    <>

      <NavbarComponent />
      <div className='position-relative chichi zoom-effect'>
        <img src={baner} alt="Banner" className='img-fluid imgg' />
        <h2 className='overlay-text'>contacto</h2>
      </div>
      <Container className='my-5'>
        <Row className='d-flex justify-content-between corralon'>
          <Col md={6} className='mb-4'>
            <Card>
              <Card.Body>
                <Card.Title className='text-center display-6'>Oficina Central</Card.Title>
                <Map />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className='mb-4'>
            <Card>
              <Card.Body>
                <Card.Title className='text-center display-6'>Corralon "El Tata"</Card.Title>
                <Map />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </>
  )
}
