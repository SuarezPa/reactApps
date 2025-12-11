import { Link } from 'react-router-dom';
import '../styles/notFound.css';

function NotFound() {
  return (
    <>
      <section className="notfound_section">
        <h1>PAGE NOT FOUND...</h1>
        <Link to="/">Go back home</Link>
      </section>
    </>
  );
}

export default NotFound;
