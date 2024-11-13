import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cotizacion from "./pages/Cotizacion";
import Navbar from "./layouts/Navbar";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
