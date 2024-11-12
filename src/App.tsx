import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartProvider } from './contexts/cartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
