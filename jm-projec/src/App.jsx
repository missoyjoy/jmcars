
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import CarsForSale from "./Pages/CarsForSale";
import CarsForHire from "./Pages/CarsForHire";
import CarWash from "./Pages/CarServices/CarWash.jsx";
import RepairsandMaintenance from "./Pages/CarServices/RepairsandMaintenance";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./Pages/Authentication/Signup";
import Login from "./Pages/Authentication/Login";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cars-for-sale" element={<ProtectedRoute><CarsForSale /> </ProtectedRoute>}/>
        <Route path="/cars-for-hire" element={<ProtectedRoute><CarsForHire /></ProtectedRoute>}/>
        <Route path="/car-wash" element={<ProtectedRoute><CarWash /></ProtectedRoute>}/>
        <Route path="/repairs-maintenance" element={<RepairsandMaintenance />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;


