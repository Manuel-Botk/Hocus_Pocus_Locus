import fria from '../Img/11.jpg' 
import descue from '../Img/22.jpg' 
import envie from '../Img/33.jpg' 
const features = [
  { name: 'Tus bebidas llegan muy frías', img: fria, title: 'Tus bebidas llegan muy frías', text: 'Elige tus cervezas favoritas en lata o botella y acompáñalas con Snacks o paqueticos para picar con todos.' },
  { name: 'Descuentos toda la semana', img: descue, title: 'Descuentos toda la semana', text: 'Sabemos que te gustan las promos, por eso las encuentras en cerveza, vinos o licores sin salir de casa.' },
  { name: 'Pide en segundos, recibe en minutos', img: envie, title: 'Pide en segundos, recibe en minutos', text: 'Te llevamos tus bebidas en pocos minutos, a la puerta de tu celebración.' },
]

import ender from '../Img/Endermen.png' 
 

const categories = [
  {
    name: 'Marihuna Caliente', img: 'https://i.ebayimg.com/images/g/RC4AAOSwpuJj4VeX/s-l400.jpg',},
  { name: 'Meta', img: 'https://www.insapgroup.com/images/meta-logo.png' },
  { name: 'Vaper sin Nicotina', img: 'https://i0.wp.com/botikacbd.com/wp-content/uploads/2022/11/Vaper-Mary-Jane.jpg' },
  { name: 'Pa´ Picar', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xfqISs7nrUMSoOMZp6oHWXms_ZDN5gGtE8FpjZnQAMxo1lTVCmRIAZg&s=10' },
  { name: 'Más que Vicio', img: 'https://i.pinimg.com/originals/2d/a7/a9/2da7a95199393fdf513575c2827d7444.jpg' },
  ]

export default function Sections() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h2>¿Qué encuentras en Hocus·Pocus·Locus, la app de domicilios deL Barrio?</h2>
          <p className="muted">Lo que necesitas para tu fiesta, reunión o celebración. Estamos listos para lo que salga.</p>
          <div className="cats">
            {categories.map((c) => (
              <div key={c.name} className="cat">
                <div className="cat-img">
                  <img src={c.img} alt={c.name} />
                </div>
                <p>{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Tus marcas de mota favoritas</h2>
          <div className="brands">
            {['Farlopa', 'Periquin', 'Siempre Tibia', 'Tusinmin', 'Critaliyos'].map((b) => (
              <div key={b} className="brand">{b}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="container promo-inner">
          <div>
            <h2>¡Cervezas frías en minutos, con grandes promociones y en botellas retornables!</h2>
            <p>Descarga en tu celular</p>
            <div className="stores">
              <a className="store" href="#"><i class="fa-brands fa-google-play"></i> Google Play</a>
              <a className="store" href="#"><i class="fa-brands fa-apple"></i> App Store</a>
            </div>
          </div>
          <div className="promo-art">
              <img src={ender}/>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>En la app de domicilios de Bavaria encuentras siempre:</h2>
          <div className="features">
            {features.map((f) => (
              <div  className="feature">
                <div className="feature-img">
                  <img src={f.img} alt={f.name} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
