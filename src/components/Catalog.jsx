import { Search, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CategoryIcon, ProductImage } from './CatalogIcons'
import { getCategories, getProducts, formatCOP } from '../api/catalogApi'

export default function Catalog({ onAdd }) {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('cervezas')
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getCategories().then(setCategories).catch((e) => setError(e.message))
  }, [])

  useEffect(() => {
    getProducts({ category: query ? undefined : category, query })
      .then(setProducts)
      .catch((e) => setError(e.message))
  }, [category, query])

  return (
    <section id="catalogo" className="section">
      <div className="container">
        <h2>Pide en segundos, recibe en minutos</h2>

        <div className="search-wrap">
          <Search size={18} className="search-icon" />
          <input
            className="search-input wide"
            placeholder="Encuentra tus productos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="chips">
          {categories.map((c) => (
            <button
              key={c.id}
              className={'chip' + (category === c.id && !query ? ' active' : '')}
              onClick={() => { setQuery(''); setCategory(c.id) }}
            >
              <CategoryIcon id={c.id} size={16} />{c.name}
            </button>
          ))}
        </div>

        {error && <p className="error">{error}</p>}

        <div className="grid">
          {products.map((p) => (
            <article key={p.id} className="card">
              {p.promo && <span className="badge">Promo</span>}
              <div className="card-img"><ProductImage product={p} size={56} /></div>
              <p className="price">{formatCOP(p.price)} <span className="muted small">unid</span></p>
              <p className="name">{p.name}</p>
              <p className="muted small">{p.size}</p>
              <button className="add" onClick={() => onAdd(p)} aria-label="Agregar">
                <Plus size={18} />
              </button>
            </article>
          ))}
          {!products.length && <p className="muted">No encontramos productos.</p>}
        </div>
      </div>
    </section>
  )
}