import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ByCategory from "./pages/byCategory";
import ErrorPage from "./pages/ErrorPage";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<ByCategory />} />
        <Route
          path="*"
          element={
            <>
              <ErrorPage />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
