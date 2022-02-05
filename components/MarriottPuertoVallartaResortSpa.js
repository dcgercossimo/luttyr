import Image from "next/image";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function MarriottPuertoVallartaResortSpa() {
    return (
        <Container>
            <hr />
            <Row style={{
                textAlign: 'center'
            }}>
                <Col xs="12">
                    <h3>Marriott Puerto Vallarta Resort & Spa</h3>
                    <Image src="/images/Puerto-Vallarta-01.png" alt="Marriott Puerto Vallarta Resort & Spa" width={1000} height={550} />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                    <h4>Comodidades do Hotel</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Café da manhã
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Wifi
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Spa (não incluso)
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Piscina com borda infinita
                        </ListGroup.Item>
                        <ListGroup.Item>
                            13 salas de eventos
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Academia
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs="12" md="6">
                    <h4>02 Double Beds Ocean View</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Varanda
                        </ListGroup.Item>
                        <ListGroup.Item>
                            02 camas King
                        </ListGroup.Item>
                        <ListGroup.Item>
                            34 m²
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Com ar condicionado
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Amenidades de banho {'(THANN)'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Secador de cabelo
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Ferro e tábua de passar
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cafeteira
                        </ListGroup.Item>
                        <ListGroup.Item>
                            TV LED de 55 polegadas/140 cm
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Sala de alta tecnologia plug in
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Canais de filmes premium
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cabo/satélite
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cabo/satélite internacional
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Rádio
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Estéreo
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Base para iPod
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Netflix
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Estão disponíveis quartos comunicantes
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}