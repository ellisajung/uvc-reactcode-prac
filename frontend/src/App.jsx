import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideNav } from "./components/nav/sideNav";
import Main from "./pages/main";
import Table from "./pages/table";
import { AddItem } from "./pages/addItem";
import { EditItem } from "./pages/editItem";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Settings } from "./pages/settings";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <BrowserRouter>
          <SideNav />
          <Routes>
            <Route
              path="/"
              element={<Main />}
            />
            <Route
              path="/board/table"
              element={<Table />}
            />
            <Route
              path="/board/table/add-item"
              element={<AddItem />}
            />
            <Route
              path="/board/table/edit-item"
              element={<EditItem />}
            />
            <Route
              path="/user/login"
              element={<Login />}
            />
            <Route
              path="/user/signup"
              element={<SignUp />}
            />
            <Route
              path="/user/settings"
              element={<Settings />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
