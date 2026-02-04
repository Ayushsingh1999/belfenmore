import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Mainlayout.jsx";
import Home from "./pages/Home";
import ProspectArgument from "./pages/ProspectArgument";
import Domain from "./pages/Domain/Domain.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/prospect-augment"
            element={<ProspectArgument />}
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
