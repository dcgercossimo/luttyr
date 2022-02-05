import Image from "next/image";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function GrandVelasRivieraNayarit() {
    return (
        <Container>
            <hr />
            <Row style={{
                textAlign: 'center'
            }}>
                <Col xs="12">
                    <h3>Grand Velas Riviera Nayarit</h3>
                    <Image src="/images/Puerto-Vallarta-08.png" alt="Grand Velas Riviera Nayarit" width={1000} height={550} />
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
                            Áreas esportivas
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Programações de entretenimento
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Spa (não incluso)
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Esportes aquáticos
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Piscina infinita
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Jacuzzi
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Concierge
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Wifi
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Business corner
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs="12" md="6">
                    <h4>Master Suite Ocean View</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            1 cama king ou 2 queen (sujeito a disponibilidade)
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Vista do oceano
                        </ListGroup.Item>
                        <ListGroup.Item>
                            94 m2
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Terraço privado
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Almofadas e edredons de penas de ganso
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Área de dormir e estar aberta
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Abastecido diariamente, minibar premium
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cafeteira Nespresso
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Seleção do chá Te ´ s Forte
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Menu de travesseiros
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Preparação de sua suíte para descanso todas as noites
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Produtos de banho {`L'Occitane`}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Secador de cabelo
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Roupões e sandálias
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Banheiro com jacuzzi
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Chuveiro separado
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Banheira com Hidromassagem
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}