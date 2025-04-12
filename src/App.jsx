import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Monitoring from './pages/Monitoring'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Monitoring />}
        />
        <Route
          path="/admin"
          element={<Admin />}
        />
      </Routes>
    </Router>
  )
}

export default App
