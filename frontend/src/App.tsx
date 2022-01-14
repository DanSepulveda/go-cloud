import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/Main'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Main>
  )
}

export default App