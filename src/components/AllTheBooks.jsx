
import { Container, Row, Col, Card } from 'react-bootstrap'
import books from '../data/fantasy.json'   

export default function AllTheBooks() {
  return (
    <Container className="mt-4">
      <Row xs={2} sm={3} md={4} lg={5} className="g-3">
        {books.map(({ asin, title, img, price }) => (
          <Col key={asin}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={img}
                alt={title}
                loading="lazy"
              />
              <Card.Body>
                <Card.Title className="fs-6">{title}</Card.Title>
                {typeof price === 'number' && (
                  <Card.Text className="mb-0 text-muted">€ {price.toFixed(2)}</Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
