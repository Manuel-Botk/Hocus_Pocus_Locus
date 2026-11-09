export default function Club({ points, onActivate, activated }) {
  return (
    <section id="club" className="section club">
      <div className="container club-inner">
        <div>
          <h2>¡Canjea beneficios increíbles!</h2>
          <div className="pill blue"> Cupones de descuento en Hocus·Pocus·Locus Delivery</div>
          <div className="pill pink"> Un buen de premios con chances exclusivas del Club</div>
          <h3>Formas de ganar puntos:</h3>
          <div className="pill light">1.000 COP EN COMPRAS = <b>✖ 15 puntos</b></div>
          <button className="btn-dark" onClick={onActivate} disabled={activated}>
            {activated ? 'Club activado ✓' : 'Activa y gana 3000 puntos →'}
          </button>
        </div>
        <div className="club-card">
          <p>Club Hocus·Pocus·Locus</p>
          <strong>✖ {points} pts</strong>
          <span>ÚNETE AL CLUB</span>
        </div>
      </div>
    </section>
  )
}
