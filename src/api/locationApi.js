// API 1 — Ubicación / Direcciones
// Usa la Geolocation API del navegador + Nominatim (OpenStreetMap) para geocodificar.
const KEY = 'tada_address'
const NOMINATIM = 'https://nominatim.openstreetmap.org'

export const DEFAULT_ADDRESS = {
  label: 'Bogotá, Colombia',
  lat: 4.711,
  lon: -74.0721,
}

export function getSavedAddress() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || null
  } catch {
    return null
  }
}

export function saveAddress(address) {
  localStorage.setItem(KEY, JSON.stringify(address))
  return address
}

export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject(new Error('Geolocalización no disponible'))
    navigator.geolocation.getCurrentPosition(
      (p) => resolve({ lat: p.coords.latitude, lon: p.coords.longitude }),
      (e) => reject(new Error(e.message)),
      { enableHighAccuracy: true, timeout: 10000 }
    )
  })
}

export async function reverseGeocode(lat, lon) {
  const res = await fetch(`${NOMINATIM}/reverse?format=jsonv2&lat=${lat}&lon=${lon}`, {
    headers: { 'Accept-Language': 'es' },
  })
  if (!res.ok) throw new Error('No se pudo obtener la dirección')
  const data = await res.json()
  return { label: data.display_name || `${lat.toFixed(5)}, ${lon.toFixed(5)}`, lat, lon }
}

export async function searchAddress(query) {
  if (!query || query.trim().length < 3) return []
  const url = `${NOMINATIM}/search?format=jsonv2&countrycodes=co&limit=5&q=${encodeURIComponent(query)}`
  const res = await fetch(url, { headers: { 'Accept-Language': 'es' } })
  if (!res.ok) throw new Error('Error buscando dirección')
  const data = await res.json()
  return data.map((d) => ({ label: d.display_name, lat: parseFloat(d.lat), lon: parseFloat(d.lon) }))
}

export function mapEmbedUrl({ lat, lon }) {
  const d = 0.004
  const bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`
}
