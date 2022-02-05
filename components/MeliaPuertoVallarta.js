import Image from "next/image";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function MeliaPuertoVallarta() {
    return (
        <Container>
            <hr />
            <Row style={{
                textAlign: 'center'
            }}>
                <Col xs="12">
                    <h3>Melia Puerto Vallarta</h3>
                    <Image src="/images/Puerto-Vallarta-05.png" alt="Melia Puerto Vallarta" width={1000} height={550} />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                    <h4>Comodidades do Hotel</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            All Inclusive
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Piscina Lagoa
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Mercado Artesanal no local
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Áreas esportivas
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Entretenimento noturno
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Spa (não incluso)
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs="12" md="6">
                    <h4>Quarto Premium com vista frontal do Mar</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Uma Cama King Size ou Duas Camas de Casal
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Espaçoso quarto de 39 metros quadrados
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Ar condicionado
                        </ListGroup.Item>
                        <ListGroup.Item>
                            TV de plasma 32” via cabo
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Sacada privada
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cofre de segurança digital
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Ferro e tábua de passar
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Secador de cabelo
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}