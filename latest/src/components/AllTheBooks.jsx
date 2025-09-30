import { Container, Row, Col, Card } from 'react-bootstrap';
// import books from 'fantasy.json'; // <-- cambia file se vuoi (es: history.json)

export default function AllTheBooks() {
  return (
    <Container className="mt-4">
      <Row xs={2} sm={3} md={4} lg={5} className="g-3">
        {books.map((b) => (
          <Col key={b.asin ?? b.isbn ?? b.id ?? b.title}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={b.img ?? b.image ?? ''}
                alt={b.title ?? 'Copertina libro'}
              />
              <Card.Body>
                <Card.Title className="fs-6">{b.title ?? 'Senza titolo'}</Card.Title>
                {b.price && <Card.Text className="mb-0">€ {b.price}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}