import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ByCategory from "./pages/byCategory";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./assets/containers/navbar";
import Footer from "./assets/containers/footer"
import Admin from "./pages/admin";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<ByCategory />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="*"
          element={
            <>
              <ErrorPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
