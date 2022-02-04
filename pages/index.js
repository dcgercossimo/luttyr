import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaWhatsapp } from 'react-icons/fa'
import { Button, Card, Carousel, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Photos from '../components/Photos'
import Info from '../components/Info'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lutty Ramos</title>
        <meta name="description" content="Acessoria de viagens para treinamentos de Access Consciousness" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <Container fluid style={{
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1000px'
        }}>
          <Row>
            <Col className={styles.centered}>
              <Image src="/images/OndaLuttyLg.png" alt="Lutty Ramos" width={142} height={98} />
            </Col>
          </Row>
          <Row>
            <Col className={styles.centered}>
              <h1 className={styles.title}>
                Lutty Ramos
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className={styles.centered}>
              <h2>Puerto Vallarta, México</h2>
            </Col>
          </Row>
          <Row>
            <Col xs className={styles.centered}>
              <div className={`${styles.description} d-grid gap-2`}>
                <Button variant="success" size='lg' href='#'>Inscrever</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Photos />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Info head="Distância dos hotéis para o Centro de Convenções">
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    Casa Velas (2.84 Kms) aproximadamente 12 minutos de carro
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Melia Puerto Vallarta (2.91 Kms) aproximadamente 13 minutos de carro
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Marriott Puerto Vallarta Resort & Spa (2.95 Kms) aproximadamente 14 minutos de carro
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Grand Velas Riviera Nayarit All Inclusive (7.78 Kms) aproximadamente 20 minutos de carro
                  </ListGroup.Item>
                </ListGroup>
              </Info>
            </Col>
            <Col xs="12">
              <Card>
                <Card.Img variant="top" src="/images/Puerto-Vallarta-04.png" />
                <Card.Body>
                  <Card.Title>Melia Puerto Vallarta</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col xs="12" md="6">
                        <h5>Comodidades do Hotel</h5>
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
                        <h5>Quarto Premium com vista frontal do Mar</h5>
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
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://api.whatsapp.com/send?phone=50769806834" target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/OndaLutty.svg" alt="Lutty Ramos" width={72} height={16} />
          </span>
          Lutty Ramos:{' '}
          +507 6980-6834{' '}<FaWhatsapp />
        </a>
      </footer>
    </div>
  )
}
