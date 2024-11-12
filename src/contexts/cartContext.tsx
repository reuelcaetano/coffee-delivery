import { createContext, ReactNode, useState } from "react";

interface Item {
  id: number
  amount: number
  price: number
}

interface Product {
  id: number
  tags: string[]
  title: string
  description: string
  price: number
  thumb: string
}

interface CartContextProps {
  cart: Item[]
  stock: Product[]
  insertItem: (id: number, amount: number) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Item[]>([])
  const [stock] = useState<Product[]>([
    {
      id: 1,
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.90,
      thumb: 'expresso'
    },
    {
      id: 2,
      tags: ['TRADICIONAL'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.90,
      thumb: 'americano'
    },
    {
      id: 3,
      tags: ['TRADICIONAL'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.90,
      thumb: 'expresso_cremoso'
    },
    {
      id: 4,
      tags: ['TRADICIONAL', 'GELADO'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.90,
      thumb: 'expresso_gelado'
    },
    {
      id: 5,
      tags: ['TRADICIONAL', 'COM LEITE'],
      title: 'Café com leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.90,
      thumb: 'cafe_leite'
    },
    {
      id: 6,
      tags: ['TRADICIONAL', 'COM LEITE'],
      title: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.90,
      thumb: 'latte'
    },
    {
      id: 7,
      tags: ['TRADICIONAL', 'COM LEITE'],
      title: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.90,
      thumb: 'capuccino'
    },
    {
      id: 8,
      tags: ['TRADICIONAL', 'COM LEITE'],
      title: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.90,
      thumb: 'macchiato'
    },
    {
      id: 9,
      tags: ['TRADICIONAL', 'COM LEITE'],
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.90,
      thumb: 'mochaccino'
    },
    {
      id: 10,
      tags: ['ESPECIAL', 'COM LEITE'],
      title: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.90,
      thumb: 'chocolate_quente'
    },
    {
      id: 11,
      tags: ['ESPECIAL', 'ALCÓOLICO', 'GELADO'],
      title: 'Cubano',
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.90,
      thumb: 'cubano'
    },
    {
      id: 12,
      tags: ['ESPECIAL'],
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.90,
      thumb: 'havaiano'
    },
    {
      id: 13,
      tags: ['ESPECIAL'],
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.90,
      thumb: 'arabe'
    },
    {
      id: 14,
      tags: ['ESPECIAL', 'ALCÓOLICO'],
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.90,
      thumb: 'irlandes'
    },
  ])

  function insertItem(id: number, amount: number) {
    const item = cart.find((item) => item.id === id)
    const product = stock.find((product) => product.id === id)
    if (!product) { return }
    if (!item) {
      setCart((state) => [...state, { id, amount, price:product?.price }])
    }
  }

  function removeItem(id: number) {
    const items = cart.filter((item) => item.id != id)
    setCart(items)
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, stock, insertItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}