import './App.scss'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserContext from './context/UserContext'

const App = () => {
  const { userState } = useContext(UserContext)
  const token = userState.token

  return (
    <BrowserRouter>
      <Routes>
        {token && <Route path='/' element={<Dashboard />} />}
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Navigate to={token ? '/' : "/login"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App