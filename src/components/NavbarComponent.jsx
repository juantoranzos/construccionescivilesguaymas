import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBuilding } from 'react-icons/bs'; // Asegúrate de instalar react-icons

function NavbarComponent() {
  return (
    <Navbar style={{ backgroundColor: '#043055' }} className='p-5' expand="lg">
      <Container fluid className=''>
        <Navbar.Brand href="#" className="d-flex align-items-center text-white" >
          <BsBuilding className="me-2 text-white fs-5" size={ 35 } /> Construcciones Civiles
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#servicios" className='text-white fs-5'>Servicios</Nav.Link>
            <Nav.Link href="#historia" className='text-white fs-5'>Historia</Nav.Link>
            <Nav.Link href="#proyectos" className='text-white fs-5'>Proyectos</Nav.Link>
            <Nav.Link href="#contacto" className='text-white fs-5'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;