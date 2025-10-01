import { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false }; // booleano richiesto
  }

  handleToggle = () => {
    this.setState((prev) => ({ selected: !prev.selected }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;
    if (!book) return null;

    return (
      <Card
        className={`h-100 ${selected ? 'border-primary shadow' : ''}`}
        onClick={this.handleToggle}
        role="button"
        aria-pressed={selected}
      >
        <Card.Img variant="top" src={book.img} alt={book.title} loading="lazy" />
        <Card.Body>
          <Card.Title className="fs-6">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
