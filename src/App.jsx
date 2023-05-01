import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNews from "./pages/AddNews";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="max-w-[75rem] bg-neutral-900 min-h-screen mx-auto px-8 py-4 sm:px-3 font-archy">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNews />} />
        <Route path="/news/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
