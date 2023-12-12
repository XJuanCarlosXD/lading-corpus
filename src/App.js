import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cotizacion from "./pages/Cotizacion";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="contiza" element={<Cotizacion />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
