import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Brands from "./pages/Brands.jsx";
import ProspectArgument from "./pages/ProspectArgument";
import Domain from "./pages/Domains/Domain.jsx";
import Careers from "./pages/Careers.jsx";
import Solve from "./pages/Solve/Solve.jsx";
import Trends from "./pages/Trends/Trends.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path="/solve" element={<Solve />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/prospect-augment" element={<ProspectArgument />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/domains" element={<Domain />} />
          <Route path="/trends" element={<Trends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
