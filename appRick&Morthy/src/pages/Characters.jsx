import Card from '../components/Card.jsx';
import { consultClients } from '../services/http-service.js';
import { useState, useEffect } from 'react';
import Partners from '../components/Partners.jsx';

function Characters() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await consultClients(page);
        if (!cancelled) {
          setProducts(data.results ?? []);
          setTotalPages(data.info?.pages ?? null);
        }
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
  }, [page]);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar personajes.</p>;

  let pageNumber = document.getElementById('page'); // To avoid linter
  console.log('pageNumber:', pageNumber);

  return (
    <>
      {/* Pagination controls */}
      <section className="pagination" style={{ textAlign: 'center', margin: 8 }}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          aria-label="Anterior"
        >
          Anterior
        </button>
        <span style={{ margin: '0 12px' }}>
          Página {page}
          {totalPages ? ` / ${totalPages}` : ''}
        </span>
        <button
          onClick={() => setPage((p) => (totalPages ? Math.min(totalPages, p + 1) : p + 1))}
          disabled={totalPages != null && page >= totalPages}
          aria-label="Siguiente"
        >
          Siguiente
        </button>
      </section>
      <section className="card__section">
        {products.slice(0, 18).map((product) => (
          <Card
            key={product.id}
            title={String(product.name).substring(0, 15).toUpperCase()}
            price={product.price}
            imagen={product.image}
            description={product.description}
          />
        ))}
      </section>
      <Partners />
    </>
  );
}

export default Characters;
