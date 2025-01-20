import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import LandingRoute from './Pages/LandingRoute/LandingRoute';
import UpdatePackage from './Pages/UpdatePackage/UpdatePackage';

function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/update/:id" element={<UpdatePackage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
