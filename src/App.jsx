import React from "react";
import LikeButton from "./components/LikeButton";
import InputField from "./components/InputField";
import ShowHide from "./components/ShowHide";
import LoadingScreen from "./components/LoadingScreen";
import ApiTester from "./components/apiTester";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/notfound";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<ApiTester />} />
          <Route path="/likes" element={<LikeButton />} />
          <Route path="/input" element={<InputField />} />
          <Route path="/loading" element={<LoadingScreen />} />
          <Route path="/show" element={<ShowHide />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
