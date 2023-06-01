import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import ShowPage from "./pages/ShowPage";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
      </Route>
      <Route path="/show/:showId" element={<ShowPage />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default Router;
