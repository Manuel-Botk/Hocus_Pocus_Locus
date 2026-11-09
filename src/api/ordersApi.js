
const CART = 'tada_cart'
const ORDERS = 'tada_orders'
const POINTS = 'tada_points'
const POINTS_PER_1000 = 15

const read = (k, d) => {
  try {
    return JSON.parse(localStorage.getItem(k)) ?? d
  } catch {
    return d
  }
}
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v))


export const getCart = () => read(CART, [])

export function addToCart(product) {
  const cart = getCart()
  const item = cart.find((i) => i.id === product.id)
  if (item) item.qty += 1
  else cart.push({ ...product, qty: 1 })
  write(CART, cart)
  return cart
}

export function setQty(id, qty) {
  let cart = getCart()
  cart = qty <= 0 ? cart.filter((i) => i.id !== id) : cart.map((i) => (i.id === id ? { ...i, qty } : i))
  write(CART, cart)
  return cart
}

export const clearCart = () => write(CART, [])
export const cartTotal = (cart) => cart.reduce((s, i) => s + i.price * i.qty, 0)


export const getPoints = () => read(POINTS, 0)
export const earnedPoints = (total) => Math.floor(total / 1000) * POINTS_PER_1000
export const isClubActive = () => read('tada_club', false)
export function activateClub() {
  if (isClubActive()) return getPoints()
  write('tada_club', true)
  write(POINTS, getPoints() + 3000)
  return getPoints()
}


export const getOrders = () => read(ORDERS, [])

export function createOrder(address) {
  const cart = getCart()
  if (!cart.length) throw new Error('El carrito está vacío')
  const total = cartTotal(cart)
  const order = {
    id: 'TD-' + Date.now().toString().slice(-6),
    date: new Date().toISOString(),
    address: address?.label || 'Sin dirección',
    items: cart,
    total,
    status: 'En camino',
    points: earnedPoints(total),
  }
  write(ORDERS, [order, ...getOrders()])
  write(POINTS, getPoints() + order.points)
  clearCart()
  return order
}
