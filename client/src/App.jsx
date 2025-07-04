import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import NotFound from "./Components/Notfound/Notfound";
import ImageUploader from "./Components/Enhance/ImageUploader";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/enhance" element={<ImageUploader />} />
        </Route>
      </Routes>
    </Router>
  );
}
