import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cotizacion from "./pages/Cotizacion";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="contiza" element={<Cotizacion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
