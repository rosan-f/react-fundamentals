import { Route, Routes } from "react-router";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import NotFoundPage from "./page/NotFoundPage";
import ProductDetailPage from "./page/ProductDetailPage"
import ProductsPage from "./page/ProductsPage";

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />

        {/* Dynamic Route */}
        <Route path="/product/:slug" element={<ProductDetailPage />} />


        <Route path="*" element={<NotFoundPage/>} />
      </Routes>

    </div>
  );
}
export default App;
