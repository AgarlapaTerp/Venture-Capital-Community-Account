import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
