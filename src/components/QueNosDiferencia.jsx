import { Card, Container, Row, Col } from 'react-bootstrap';
import { HardHat, Truck, Mountain, Shield, MonitorCog, Building2, MountainSnow } from 'lucide-react';

export const QueNosDiferencia = () => {
  return (
    <>
      <Container id="servicios" className="py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6 lg:px-8 mx-auto text-center">
          <h2 className="display-4 font-bold p-3 m-3 ">Nuestros Servicios.</h2>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Card className="mb-4 shadow" data-aos="zoom-out-right">
                <Card.Body className="flex flex-col items-center p-6 ">
                  <HardHat className=" mb-4 text-dark" size={44} />
                  <h3 className="text-lg font-bold mb-2">Construcción Minera</h3>
                  <p className="text-center text-sm text-gray-500">Infraestructura especializada para la minería.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card className="mb-4 shadow" data-aos="zoom-out-left">
                <Card.Body className="flex flex-col items-center p-6">
                  <Truck className=" mb-4 text-dark" size={44} />
                  <h3 className="text-lg font-bold mb-2">Logística y Transporte</h3>
                  <p className="text-center text-sm text-gray-500">Soluciones de transporte en terrenos difíciles.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card className="mb-4 shadow" data-aos="zoom-out-right">
                <Card.Body className="flex flex-col items-center p-6">
                <MountainSnow className=" mb-4 text-dark" size={44} />
                  <h3 className="text-lg font-bold mb-2">Obras de Montaña</h3>
                  <p className="text-center text-sm text-gray-500">Especialistas en construcción en zonas montañosas.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card className="mb-4 shadow" data-aos="zoom-out-left">
                <Card.Body className="flex flex-col items-center p-6">
                  <Shield className=" mb-4 text-dark" size={44} />
                  <h3 className="text-lg font-bold mb-2">Seguridad y Protección</h3>
                  <p className="text-center text-sm text-gray-500">Utilizamos las más altas normas de seguridad.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card className="mb-4 shadow" data-aos="zoom-out-right">
                <Card.Body className="flex flex-col items-center p-6">
                <MonitorCog className=" mb-4 text-dark" size={44} />
                  <h3 className="text-lg font-bold mb-2">Mantenimiento de maquinas Industriales</h3>
                  <p className="text-center text-sm text-gray-500">Utilizamos las más altas normas de seguridad.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card className="mb-4 shadow" data-aos="zoom-out-left">
                <Card.Body className="flex flex-col items-center p-6">
                <Building2  className=" mb-4 text-dark" size={44} />
                  <h3 className="text-lg font-bold mb-2">Mantenimiento de Edificios</h3>
                  <p className="text-center text-sm text-gray-500">Utilizamos las más altas normas de seguridad.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
