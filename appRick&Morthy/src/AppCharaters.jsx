import './App.css'
import Card from './components/Card.jsx'
import { consultClients } from './services/http-service.js'
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await consultClients();
        if (!cancelled) setProducts(data)
      } catch (err) {
        console.error('Error fetching products:', err);
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProducts()
    return () => { cancelled = true }
  }, [])

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error al cargar productos.</p>

  return (
    <>
      <h1>Name Cliente.</h1>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          price={product.price}
          imagen={product.image}
          description={product.description}
        />
      ))}
    </>
  )
}

export default App