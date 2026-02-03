import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Mainlayout";
import Home from "./pages/Home";
import ProspectArgument from "./pages/ProspectArgument";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
