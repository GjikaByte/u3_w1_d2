import { Container } from 'react-bootstrap';

export default function MyFooter() {
  return (
    <footer className="bg-dark text-light mt-5 py-3">
      <Container className="text-center">
        <small>&copy; {new Date().getFullYear()} My Book Shop · All rights reserved.</small>
      </Container>
    </footer>
  );
}
