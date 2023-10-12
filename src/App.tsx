import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
// import { liteTheme } from './styles/themes/lite'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}
