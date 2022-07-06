import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { Header } from './components/header/Header';
import { CatalogPage } from './pages/catalog-page/CatalogPage';
import { NotFoundPage } from './pages/not-found-page/NotFoundPage';
import { Basket } from "./components/basket/Basket"
import { GamePage } from "./pages/game-page/GamePage"
import { LoginPage } from "./pages/login-page/LoginPage"
import Slider from "./components/slider/Slider"
import { RegisterPage } from './pages/registration-page/RegistrationPage';
import { setFilterDataDelete, setInputTextDelete } from "./store/slice/searchFilter"

// HOC

import { RequireAuth } from "./hoc/RequireAuth"


function App() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setFilterDataDelete())
    dispatch(setInputTextDelete())
  }
  return (
    <BrowserRouter >
      <div onClick={handleClick}>
        <Header />
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/catalog' element={
            <RequireAuth>
              <CatalogPage />
            </RequireAuth>
          } />
          <Route path='/basket' element={
            <RequireAuth>
              <Basket />
            </RequireAuth>
          } />
          <Route path='/game/:title' element={
            <RequireAuth>
              <GamePage />
            </RequireAuth>
          } />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
