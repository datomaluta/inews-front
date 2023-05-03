import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNews from "./pages/AddNews";
import Detail from "./pages/Detail";
import Header from "./components/sharedComponents/Header";
import AdminNews from "./pages/AdminNews";

function App() {
  return (
    <div className="max-w-[75rem] bg-neutral-900 min-h-screen mx-auto px-8 py-4 sm:px-3 font-archy">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<Detail />} />
        <Route path="/admin/add" element={<AddNews action="create" />} />
        <Route path="/admin/news" element={<AdminNews />} />
        <Route path="/admin/news/:id" element={<AddNews action="update" />} />
      </Routes>
    </div>
  );
}

export default App;
