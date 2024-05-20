import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Dashboard05 } from "./pages/dashboard05";

function App() {
  return (
    <BrowserRouter>
      <Link to="/pages/dashboard05">Dashboard05</Link>
      <Routes>
        <Route
          path="/pages/dashboard05"
          element={<Dashboard05 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
