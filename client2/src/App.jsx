import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Homelayout from './pages/layouts/homelayout'
import DashLayout from './pages/layouts/DashLayout'
import Dashboard from './pages/Dashboard'
import Organizations from './pages/Organizations'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/organizations" element={<Organizations/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
