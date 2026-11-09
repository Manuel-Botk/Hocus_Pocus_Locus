import { Search, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getCurrentPosition, reverseGeocode, searchAddress, saveAddress, mapEmbedUrl, DEFAULT_ADDRESS } from '../api/locationApi'

export default function LocationModal({ onClose, onSelect, current }) {
  const [selected, setSelected] = useState(current || DEFAULT_ADDRESS)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query.trim().length < 3) return setResults([])
    const t = setTimeout(async () => {
      try {
        setResults(await searchAddress(query))
      } catch (e) {
        setError(e.message)
      }
    }, 450)
    return () => clearTimeout(t)
  }, [query])

  const useMyLocation = async () => {
    setLoading(true)
    setError('')
    try {
      const { lat, lon } = await getCurrentPosition()
      setSelected(await reverseGeocode(lat, lon))
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const confirm = () => {
    onSelect(saveAddress(selected))
    onClose()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>¿A dónde te llevamos las frías?</h3>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>
        <iframe title="Mapa" className="map" src={mapEmbedUrl(selected)} />
        <button className="btn-outline" onClick={useMyLocation} disabled={loading}>
          {loading ? 'Ubicando…' : '◎ Ubicación actual'}
        </button>
        <h4>La entrega será aquí:</h4>
        <p className="muted small">{selected.label}</p>
        <input className="search-input" placeholder=" Buscar dirección" value={query} onChange={(e) => setQuery(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <ul className="results">
          {results.map((r, i) => (
            <li key={i} onClick={() => { setSelected(r); setResults([]); setQuery('') }}>{r.label}</li>
          ))}
        </ul>
        <button className="btn-primary full" onClick={confirm}>Continuar →</button>
      </div>
    </div>
  )
}
