import logo from '../Img/LogoHocus·Pocus·Locus.png'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#" className="logo">
            <img src={logo} alt="TaDa Delivery de bebidas" />
          </a>
          <div className="legal-icons"><img src='https://services.dtc.mybees-platform.com/sting-dtc-mellifera-web/_next/image?url=https%3A%2F%2Fcms-non-prod.global.ssl.fastly.net%2Fmedia%2F12-16-2024-image1590-39ffa489.png&w=128&q=75'></img></div>
          <div className="stores">
            <a className="store" href="#"><i class="fa-brands fa-google-play"></i>Google Play</a>
            <a className="store" href="#"><i class="fa-brands fa-apple"></i> App Store</a>
          </div>
        </div>
        <div>
          <h4>Sobre Hocus·Pocus·Locus</h4>
          <a href="#">Promociones</a>
          <a href="#">Club Hocus·Pocus·Locus Términos y Condiciones</a>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Registrar tu tienda</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="#">Términos de Uso</a>
          <a href="#">Política de Privacidad</a>
        </div>
        <div>
          <h4>Social</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <p className="legal container">
        Proyecto académico — réplica con fines educativos, sin afiliación con Hocus·Pocus·Locus ni Bavaria. La disponibilidad de los productos depende de tu
        ubicación. PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD. EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD.
        NO COMPARTAS ESTE CONTENIDO CON MENORES DE EDAD.
      </p>
    </footer>
  )
}
