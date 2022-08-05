import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import UserDashboard from './components/UserDashboard';
import Marketplace from './components/Marketplace';

function App() {
  const [investor, setInvestor] = useState(false)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage setInvestor={setInvestor}/>} />
          <Route path="/login" exact element={<Login investor={investor}/>} />
          <Route path="/userdashboard" exact element={<UserDashboard/>} />
          <Route path="/marketplace" exact element={<Marketplace/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
