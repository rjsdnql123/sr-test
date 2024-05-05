import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./index";

const RouterIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterIndex;
