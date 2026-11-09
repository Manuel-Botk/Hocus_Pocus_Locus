import { formatCOP } from '../api/catalogApi'

export default function Orders({ orders }) {
  return (
    <section id="pedidos" className="section alt">
      <div className="container">
        <h2>Pedidos</h2>
        {!orders.length ? (
          <div className="empty">
            <div className="bag sad">☹</div>
            <p className="muted">No tienes pedidos.</p>
          </div>
        ) : (
          <div className="orders">
            {orders.map((o) => (
              <div key={o.id} className="order">
                <div className="order-head">
                  <b>{o.id}</b>
                  <span className="badge static">{o.status}</span>
                </div>
                <p className="muted small">{new Date(o.date).toLocaleString('es-CO')} · {o.address}</p>
                <ul>
                  {o.items.map((i) => (
                    <li key={i.id}>{i.qty} × {i.name}</li>
                  ))}
                </ul>
                <p><b>{formatCOP(o.total)}</b> · <span className="points">+{o.points} pts</span></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
