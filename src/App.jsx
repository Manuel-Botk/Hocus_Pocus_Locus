import { useEffect, useState } from 'react'
import './App.css'
import Sections from './components/Sections'
import Catalog from './components/Catalog'
import Orders from './components/Orders'
import Club from './components/Club'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import LocationModal from './components/LocationModal'
import { getSavedAddress } from './api/locationApi'
import { addToCart, setQty, getCart, createOrder, getOrders, getPoints, activateClub, isClubActive } from './api/ordersApi'
import logo from './Img/LogoHocus·Pocus·Locus.png'

function App() {
  const [address, setAddress] = useState(getSavedAddress())
  const [showLocation, setShowLocation] = useState(false)
  const [cart, setCart] = useState(getCart())
  const [cartOpen, setCartOpen] = useState(false)
  const [orders, setOrders] = useState(getOrders())
  const [points, setPoints] = useState(getPoints())
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!address) setShowLocation(true)
  }, [address])

  const notify = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2200)
  }

  const handleAdd = (p) => {
    setCart([...addToCart(p)])
    notify(`${p.name} agregado 🛒`)
  }

  const handleCheckout = () => {
    if (!address) return setShowLocation(true)
    try {
      const o = createOrder(address)
      setCart([])
      setOrders(getOrders())
      setPoints(getPoints())
      setCartOpen(false)
      notify(`Pedido ${o.id} creado · +${o.points} pts 🎉`)
    } catch (e) {
      notify(e.message)
    }
  }

  const handleClub = () => {
    setPoints(activateClub())
    notify('¡Ganaste 3000 puntos! 🎉')
  }

  const count = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo">
            <img src={logo} alt="TaDa Delivery de bebidas" />
          </a>
          <nav className="links">
            <a href="#catalogo">Catálogo</a>
            <a href="#pedidos">Pedidos</a>
            <a href="#club">Club Hocus·Pocus·Locus</a>
          </nav>
          <div className="nav-actions">
            <button className="btn-outline light" onClick={() => setShowLocation(true)}>
              <i className="fa-solid fa-location-dot"></i>{' '}
              {address ? address.label.split(',').slice(0, 2).join(',') : 'Elegir dirección'}
            </button>
            <button className="btn-white" onClick={() => setCartOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i> Carrito {count > 0 && <b className="count">{count}</b>}
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Tus bebidas frías, rápidas y a buen precio</h1>
            <p className="eyebrow">Estamos en:</p>
            <div className="stores">
              <a className="store" href="#"><i class="fa-brands fa-google-play"></i> Google Play</a>
              <a className="store" href="#"><i class="fa-brands fa-apple"></i> App Store</a>
            </div>
          </div>
          <div className="hero-art">
            <span>Hocus·</span><span>Pocus·</span><span>Locus</span>
          </div>
        </div>
      </section>

      <Sections />
      <Catalog onAdd={handleAdd} />
      <Orders orders={orders} />
      <Club points={points} onActivate={handleClub} activated={isClubActive()} />
      <Footer />

      <CartDrawer
        open={cartOpen}
        cart={cart}
        address={address}
        onClose={() => setCartOpen(false)}
        onQty={(id, q) => setCart([...setQty(id, q)])}
        onCheckout={handleCheckout}
        onChangeAddress={() => setShowLocation(true)}
      />
      {showLocation && <LocationModal current={address} onClose={() => setShowLocation(false)} onSelect={setAddress} />}
      {toast && <div className="toast">{toast}</div>}
    </>
  )
}

export default App
