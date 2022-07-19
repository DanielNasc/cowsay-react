import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Speech } from "./pages/Speech";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech" element={<Speech />} />
      </Routes>
    </BrowserRouter>
  );
}
