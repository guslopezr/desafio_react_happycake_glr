import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Productos from "./views/Productos";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

// import Registro from "./views/Registro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/NotFound" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
