import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import NotFound from "../../pages/NotFound";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
