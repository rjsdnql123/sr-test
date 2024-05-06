import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./index";
import HomePage from "./home";
import PrivateRoute from "./PrivateRoute";

const RouterIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home/*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterIndex;
