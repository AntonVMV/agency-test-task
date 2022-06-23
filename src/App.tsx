import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { AboutPage } from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="About" replace />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<AboutPage />} />
          <Route path="pricing" element={<AboutPage />} />
          <Route path="blog" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
