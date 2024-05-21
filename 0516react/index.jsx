import "@styles/styles.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Video from "./pages/video";

import { Header } from "./components/header";
import { Http } from "./pages/http";
import Socket from "./pages/socket";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/video"
          element={<Video />}
        />
        <Route
          path="/http"
          element={<Http />}
        />
        <Route
          path="/socket"
          element={<Socket />}
        />
      </Routes>
    </BrowserRouter>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
