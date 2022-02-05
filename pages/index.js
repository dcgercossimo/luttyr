import Head from 'next/head'
import Image from 'next/image'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import CasaVelas from '../components/CasaVelas'
import Footer from '../components/Footer'
import GrandVelasRivieraNayarit from '../components/GrandVelasRivieraNayarit'
import Info from '../components/Info'
import MarriottPuertoVallartaResortSpa from '../components/MarriottPuertoVallartaResortSpa'
import MeliaPuertoVallarta from '../components/MeliaPuertoVallarta'
import Photos from '../components/Photos'
import styles from '../styles/Home.module.css'

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
            <Col xs="12" md="4">
              <Image src="/images/Puerto-Vallarta-02.png" alt="Puerto Vallarta" width={1000} height={550} />
              <Image src="/images/Puerto-Vallarta-03.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Col>
            <Col xs="12" md="8">
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
              <MeliaPuertoVallarta />
            </Col>
            <Col xs="12">
              <GrandVelasRivieraNayarit />
            </Col>
            <Col xs="12">
              <MarriottPuertoVallartaResortSpa />
            </Col>
            <Col xs="12">
              <CasaVelas />
            </Col>
          </Row>
        </Container>

      </main>

      <Footer />
    </div>
  )
}
