import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Login from './pages/Login';
import Home from './pages/Home'; // Will create this next

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="App">
      {currentPage === 'login' ? (
        <Login onLoginSuccess={() => setCurrentPage('home')} />
      ) : (
        <Home onLogout={() => setCurrentPage('login')} />
      )}
    </div>
  )
}

export default App
