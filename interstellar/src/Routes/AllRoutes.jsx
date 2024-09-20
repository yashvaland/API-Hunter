import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
// import SingleProductPage from "./SingleProductPage";
import Login from "./Login";
import PrivateRoute from "../Components/PrivateRoute";
import SingleProductPage from "./SingleProductPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/products/:id' element={
          <PrivateRoute>
            <SingleProductPage />
          </PrivateRoute>
        }></Route>
        <Route path="*" element={<h1>Page Is NOt Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
