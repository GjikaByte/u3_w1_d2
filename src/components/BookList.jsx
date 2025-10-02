// src/components/BookList.jsx
import { Component } from 'react'
import { Row, Col, FormControl } from 'react-bootstrap'
import SingleBook from './SingleBook.jsx'

export default class BookList extends Component {
  state = {
    searchQuery: ''
  }

  render() {
    const { books = [] } = this.props
    const { searchQuery } = this.state

    if (!Array.isArray(books) || books.length === 0) {
      return <p className="text-muted">Nessun libro da mostrare.</p>
    }

    const filtered = books.filter(b =>
      (b.title || '').toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
      <>
        <FormControl
          type="text"
          placeholder="Cerca un libro"
          className="mb-3"
          value={searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
          aria-label="Cerca un libro"
        />

        <Row className="g-2">
          {filtered.map((book) => (
            <Col xs={12} md={4} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </>
    )
  }
}
