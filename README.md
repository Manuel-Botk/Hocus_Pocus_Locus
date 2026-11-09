# Hocus Pocus Locus

Tienda web de domicilios para la fiesta: licores, cervezas, snacks y artículos para fumadores, con un catálogo por categorías, buscador y carrito de compras.

> **Proyecto académico / demostración.** Este sitio no realiza ventas reales ni procesa pagos. Está inspirado en la experiencia de la aplicación de domicilios **TaDa** y se desarrolló con fines educativos y de portafolio.

## Demo

🔗 https://tu-proyecto.vercel.app

## Funcionalidades

- Catálogo de productos organizado por categorías
- Buscador de productos en tiempo real
- Carrito de compras con control de cantidades y total en pesos colombianos (COP)
- Selección de dirección de entrega
- Sistema de puntos por compra
- Historial de pedidos
- Sección de club / beneficios
- Diseño responsivo para celular y escritorio

## Categorías

| Categoría | Ejemplos |
|---|---|
| Promos | Combos y ofertas de la semana |
| Cervezas | Latas, botellas, six pack, canastas |
| Licores | Aguardiente, ron, whisky, vino |
| Sin alcohol | Gaseosas, aguas, cerveza sin alcohol |
| Pa' picar | Papas, maníes, chicharrón |
| Fumadores | Cigarrillos, vapes y cigarrillos electrónicos, accesorios |
| Cannabis recreativo | Productos y accesorios (solo demostrativo) |
| Otros | Hielo, carbón, vasos desechables |

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [lucide-react](https://lucide.dev/) para los iconos
- CSS puro
- Desplegado en [Vercel](https://vercel.com/)

## Instalación y uso

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/hocus-pocus-locus.git

# 2. Entrar a la carpeta
cd hocus-pocus-locus

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Otros comandos

```bash
npm run build     # genera la versión de producción en /dist
npm run preview   # prueba la versión de producción en local
npm run lint      # revisa el código con ESLint
```

## Estructura del proyecto

```
My-proyect/
├── public/
│   ├── api/
│   │   └── products.json     # catálogo (categorías y productos)
│   └── products/             # fotos de los productos
├── src/
│   ├── api/
│   │   ├── catalogApi.js     # lectura del catálogo y formato de precios
│   │   ├── locationApi.js    # direcciones de entrega
│   │   └── ordersApi.js      # carrito, total y puntos
│   ├── components/
│   │   ├── Catalog.jsx       # catálogo y buscador
│   │   ├── CatalogIcons.jsx  # iconos de categoría e imagen de producto
│   │   ├── CartDrawer.jsx    # panel del carrito
│   │   ├── LocationModal.jsx # selector de dirección
│   │   ├── Orders.jsx        # pedidos
│   │   ├── Club.jsx          # club de beneficios
│   │   ├── Sections.jsx      # secciones informativas
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Agregar o editar productos

Los productos están en `public/api/products.json`:

```json
{
  "id": 1,
  "name": "Cerveza lager lata 330ml",
  "category": "cervezas",
  "price": 3200,
  "size": "1 und · 330ml",
  "image": "/products/1.jpg",
  "promo": false
}
```

- `image` puede ser una ruta de la carpeta `public/` o una URL completa (`https://...`).
- Si un producto no tiene imagen, se muestra el icono de su categoría.
- `promo: true` muestra la etiqueta "Promo".

## Aviso legal

- Este proyecto es una **simulación** y no vende ni entrega productos.
- La venta de alcohol, tabaco, vapes y cannabis está **regulada y restringida a mayores de edad**, y la legalidad del cannabis recreativo varía según el país. Una versión real requeriría verificación de edad, licencias y cumplimiento de la normativa local.
- Los nombres, marcas e imágenes de terceros pertenecen a sus respectivos dueños y se usan solo con fines ilustrativos. **TaDa** y sus marcas pertenecen a sus propietarios; este proyecto no está afiliado a ellos.

## Autor

Desarrollado por **Kevin David Beltran & Juan Manuel Bejarano** · [GitHub](https://github.com/TU-USUARIO)

## Licencia

Proyecto de uso académico. Todos los derechos reservados por su autor.
