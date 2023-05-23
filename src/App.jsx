import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNews from "./pages/AddNews";
import Detail from "./pages/Detail";
import Header from "./components/sharedComponents/Header";
import AdminNews from "./pages/AdminNews";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./components/sharedComponents/Auth";
import CategoryAllNews from "./pages/CategoryAllNews";
import ForSearchResult from "./pages/ForSearchResult";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className=" bg-neutral-100 dark:bg-darkbg transition-all text-neutral-900 dark:text-white font-bpg">
      <div className="max-w-[75rem] bg-white dark:bg-neutral-900 min-h-screen mx-auto  pt-4 ">
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
          <Route path="/allnews" element={<CategoryAllNews category="all" />} />
          <Route
            path="/allnews/society"
            element={<CategoryAllNews category="society" />}
          />
          <Route
            path="/allnews/politic"
            element={<CategoryAllNews category="politic" />}
          />
          <Route
            path="/allnews/sport"
            element={<CategoryAllNews category="sport" />}
          />
          <Route path="/search" element={<ForSearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
