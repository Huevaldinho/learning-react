import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import NotFound from "../../pages/NotFound";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";

function Router() {
  /**
   * This function is used to navegate through the different 
   * pages of the website.
   */
  return (
    <BrowserRouter>
      <Routes>
        {/**
         * Declare here all routes and subroutes of the website.
         */}
        <Route index element={<Navigate to="/login" /> } />
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/main" element={<MainPage />} />
        
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
