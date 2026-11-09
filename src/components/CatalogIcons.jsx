import { useState } from 'react'
import { Tag, Beer, Wine, CupSoda, Popcorn, Package } from 'lucide-react'

const CATEGORY_ICONS = {
  promos: Tag,
  cervezas: Beer,
  licores: Wine,
  'sin-alcohol': CupSoda,
  picar: Popcorn,
  otros: Package,
}

export function CategoryIcon({ id, size = 18 }) {
  const Icon = CATEGORY_ICONS[id] || Package
  return <Icon size={size} strokeWidth={1.75} />
}

export function ProductImage({ product, size = 48 }) {
  const [failed, setFailed] = useState(false)

  if (!product.image || failed) {
    return <CategoryIcon id={product.category} size={size} />
  }

  return (
    <img
      src={product.image}
      alt={product.name}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  )
}