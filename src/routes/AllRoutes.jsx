import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        
      </Routes>
    </>
  );
};

export default AllRoutes;
