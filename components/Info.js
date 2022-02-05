import { Col, Container, Row } from "react-bootstrap";

export default function Info(props) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3>{props.head}</h3>
                    <div>{props.children}</div>
                </Col>
            </Row>
        </Container>
    );
}