import Card from './components/Card.jsx';
import { consultClients } from './services/http-service.js';
import { useState, useEffect } from 'react';
import Partners from './components/Partners.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await consultClients();
        if (!cancelled) setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar productos.</p>;

  return (
    <>
      <section className="card__section">
        {products.map((product) => (
          <Card
            key={product.id}
            title={String(product.name).substring(0, 15).toUpperCase()}
            price={product.price}
            imagen={product.image}
            description={product.description}
          />
        ))}
      </section>
    </>
  );
}

export default App;
