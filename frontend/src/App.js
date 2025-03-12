import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/menu' element={
            <ProtectedRoute>
              
            </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;
