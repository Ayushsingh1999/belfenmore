import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home";
import ProspectArgument from "./pages/ProspectArgument";
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
            path="/career"
            element={<Careers />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
