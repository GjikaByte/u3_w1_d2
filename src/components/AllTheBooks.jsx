// src/components/AllTheBooks.jsx
import { useState } from 'react'
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import SingleBook from './SingleBook.jsx'

// Load all JSON files in src/data at build time (Vite feature)
const files = import.meta.glob('../data/*.json', { eager: true })

// Normalize to { datasetName: array }
const DATASETS = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => {
    const name = path.split('/').pop().replace('.json', '')
    return [name, mod.default ?? mod]
  })
)

const AVAILABLE = Object.keys(DATASETS)
const DEFAULT = DATASETS.fantasy ? 'fantasy' : AVAILABLE[0] // prefer fantasy if present

const AllTheBooks = () => {
  const [active, setActive] = useState(DEFAULT)

  if (!AVAILABLE.length) {
    return <p className="text-muted">No book datasets found in <code>src/data</code>.</p>
  }

  const books = DATASETS[active] ?? []

  return (
    <>
      <ButtonGroup className="mb-3">
        {AVAILABLE.map((name) => (
          <Button
            key={name}
            variant={name === active ? 'primary' : 'outline-primary'}
            onClick={() => setActive(name)}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>

      <Row className="g-2">
        {books.map((book) => (
          <Col xs={12} md={4} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default AllTheBooks
