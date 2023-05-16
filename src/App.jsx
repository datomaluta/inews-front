import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNews from "./pages/AddNews";
import Detail from "./pages/Detail";
import Header from "./components/sharedComponents/Header";
import AdminNews from "./pages/AdminNews";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./components/sharedComponents/Auth";

function App() {
  return (
    <div className="max-w-[75rem] bg-neutral-900 min-h-screen mx-auto  pt-4 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<Detail />} />
        <Route
          path="/admin/add"
          element={
            <Auth>
              <AddNews action="create" />
            </Auth>
          }
        />
        <Route
          path="/admin/news"
          element={
            <Auth>
              <AdminNews />
            </Auth>
          }
        />
        <Route
          path="/admin/news/:id"
          element={
            <Auth>
              <AddNews action="update" />
            </Auth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allnews" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
