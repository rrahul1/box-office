import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
      </Route>
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default Router;
