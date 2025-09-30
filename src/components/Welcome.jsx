import { Alert } from 'react-bootstrap';

export default function Welcome() {
  return (
    <section className="mt-4">
      <Alert variant="info" className="mb-2">
        Benvenuto nel nostro shop!
      </Alert>
      <h2 className="h5 text-muted">I migliori libri, al miglior prezzo.</h2>
    </section>
  );
}
