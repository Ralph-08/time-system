import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import MyHours from "./pages/MyHours/MyHours";
import "./styles/partials/_globals.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/hours" element={<MyHours />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
