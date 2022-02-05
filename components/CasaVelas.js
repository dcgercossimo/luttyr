import Image from "next/image";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function CasaVelas() {
    return (
        <Container>
            <hr />
            <Row style={{
                textAlign: 'center'
            }}>
                <Col xs="12">
                    <h3>Casa Velas</h3>
                    <Image src="/images/Puerto-Vallarta-13.png" alt="Casa Velas" width={1000} height={550} />
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
                            Acesso ao Táu Beach Club
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Acesso ao LifeFitness Center
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Transporte de/para Táu Beach Club com camas balinesas, espreguiçadeiras, toalhas, chuveiros, produtos de higiene pessoal e kits de protetor solar
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Privilégios de golfe nos clubes de golfe Marina Vallarta e Vista Vallarta
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs="12" md="6">
                    <h4>Master Suite</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            1 cama king ou Twin {'(sujeito a disponibilidade)'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            43 m2
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Ferro e tábua de passar
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Amenidades de banho {`L'Occitane`}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Menu de travesseiros
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Secador de cabelo
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cafeteira Nespresso e cápsulas de café
                        </ListGroup.Item>
                        <ListGroup.Item>
                            TV a cabo
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Mini Bar e Snacks, fornecidos diariamente
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Bolsa de praia, para uso pessoal interno
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Roupão de banho e sandálias de descanso
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}