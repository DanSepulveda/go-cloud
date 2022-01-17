import './App.scss'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserContext from './context/UserContext'

const App = () => {
  const { userState } = useContext(UserContext)
  const token = userState.token

  // Only logged in users can access to '/'. After successful log in, a token is generated.

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