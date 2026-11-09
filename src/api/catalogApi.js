// API 2 — Catálogo de productos
// Consume el endpoint /api/products.json (puedes cambiar BASE por tu backend real).
const BASE = '/api/products.json'
let cache = null

async function load() {
  if (cache) return cache
  const res = await fetch(BASE)
  if (!res.ok) throw new Error('No se pudo cargar el catálogo')
  cache = await res.json()
  return cache
}

export async function getCategories() {
  return (await load()).categories
}

export async function getProducts({ category, query, onlyPromos } = {}) {
  let list = (await load()).products
  if (category && category !== 'promos') list = list.filter((p) => p.category === category)
  if (category === 'promos' || onlyPromos) list = list.filter((p) => p.promo)
  if (query) {
    const q = query.toLowerCase()
    list = list.filter((p) => p.name.toLowerCase().includes(q))
  }
  return list
}

export const formatCOP = (n) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n)
