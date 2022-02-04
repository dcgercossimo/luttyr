import { Col, Container, Row } from "react-bootstrap";

export default function Info(props) {
    console.log(props)

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h4>{props.head}</h4>
                    <div>{props.children}</div>
                </Col>
            </Row>
        </Container>
    );
}