import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main, Page } from './components/styles'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { OrderPage } from './pages/OrderPage'

export default function App() {
  return (
    <Page>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Main>
      <Footer />
    </Page>
  )
}
