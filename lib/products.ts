export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
}

// Donation amounts for Sunrise Movement Sierra Leone
export const PRODUCTS: Product[] = [
  {
    id: 'donate-25',
    name: 'Climate Seedling Donation',
    description: 'Plant 10 trees in Sierra Leone communities',
    priceInCents: 2500, // $25
  },
  {
    id: 'donate-50',
    name: 'Youth Climate Training',
    description: 'Sponsor one youth climate leadership workshop',
    priceInCents: 5000, // $50
  },
  {
    id: 'donate-100',
    name: 'Clean Energy Fund',
    description: 'Contribute to solar energy installation for a rural school',
    priceInCents: 10000, // $100
  },
  {
    id: 'donate-250',
    name: 'Community Impact Package',
    description: 'Fund a complete community environmental education program',
    priceInCents: 25000, // $250
  },
  {
    id: 'donate-500',
    name: 'Environmental Champion',
    description: 'Support comprehensive climate resilience initiatives',
    priceInCents: 50000, // $500
  },
]

// Helper to get product by amount
export const getProductByAmount = (amount: number): Product | undefined => {
  return PRODUCTS.find(p => p.priceInCents === amount * 100)
}
