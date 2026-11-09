import { X, MapPin, ShoppingCart, Minus, Plus, ArrowRight, Star } from 'lucide-react'
import { ProductImage } from './CatalogIcons'
import { formatCOP } from '../api/catalogApi'
import { cartTotal, earnedPoints } from '../api/ordersApi'

export default function CartDrawer({ open, cart, address, onClose, onQty, onCheckout, onChangeAddress }) {
  if (!open) return null
  const total = cartTotal(cart)
  return (
    <div className="overlay right" onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>Carrito</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        </div>

        <button className="address-bar" onClick={onChangeAddress}>
          <MapPin size={18} />
          <span>{address?.label || 'Elige tu dirección'}</span>
          <b>Cambiar</b>
        </button>

        <div className="drawer-body">
          {!cart.length ? (
            <div className="empty">
              <div className="bag">
                <ShoppingCart size={48} strokeWidth={1.5} />
              </div>
              <p className="muted">Los productos que agregues aparecerán aquí.</p>
            </div>
          ) : (
            cart.map((i) => (
              <div key={i.id} className="line">
                <span className="line-emoji"><span className="line-emoji"><ProductImage product={i} size={24} /></span></span>
                <div className="grow">
                  <p className="name">{i.name}</p>
                  <p className="muted small">{formatCOP(i.price)}</p>
                </div>
                <div className="qty">
                  <button onClick={() => onQty(i.id, i.qty - 1)} aria-label="Disminuir">
                    <Minus size={16} />
                  </button>
                  <span>{i.qty}</span>
                  <button onClick={() => onQty(i.id, i.qty + 1)} aria-label="Aumentar">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="drawer-foot">
          <div>
            <p className="muted small">Total</p>
            <p className="total">{formatCOP(total)}</p>
            {total > 0 && (
              <p className="small points">
                <Star size={14} />
                Ganarás {earnedPoints(total)} pts
              </p>
            )}
          </div>
          <button className="btn-primary" disabled={!cart.length} onClick={onCheckout}>
            Continuar
            <ArrowRight size={18} />
          </button>
        </div>
      </aside>
    </div>
  )
}