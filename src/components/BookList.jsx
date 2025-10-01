import { Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook.jsx'

export default function BookList({ books = [] }) {
  if (!Array.isArray(books) || books.length === 0) {
    return <p className="text-muted">Nessun libro da mostrare.</p>
  }

  return (
    <Row className="g-2">
      {books.map((book) => (
        <Col xs={12} md={4} key={book.asin}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  )
}
