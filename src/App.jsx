import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home";
import ProspectArgument from "./pages/ProspectArgument";
import Domain from "./pages/Domain/Domain.jsx";
import Careers from "./pages/Careers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/brands" element={<Home />} />
          <Route
            path="/prospect-augment"
            element={<ProspectArgument />}
          />
           <Route
            path="/careers"
            element={<Careers />}
          />
           <Route
            path="/domain"
            element={<Domain />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
