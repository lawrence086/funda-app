import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Profile from "./Profile";
import Followers from "./Followers";
import Message from "./Message";
// import AddContent from "./AddContent";
import AddContents from "./AddContent";
import UserProfile from "./Profile";
import ChatScreen from "./ChatScreen";
import Progress from "./Progress";
import ExerciseTherapy from "./ExerciseTherapy";
import Education from "./Education";
import Mindfulness from "./Mindfulness";
import Buddies from "../ProgressScreens/Buddies";
import Stats from "../ProgressScreens/Stats";
import Goal from "../ProgressScreens/Goal";

const Landing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/message" element={<Message />} />
          <Route path="/addContent" element={<AddContents />} />

          <Route path="/progress" element={<Progress />}>
            <Route index element={<Buddies />} />
            <Route path="/progress/stats" element={<Stats />} />
            <Route path="/progress/goal" element={<Goal />} />
          </Route>

          <Route path="/message/chatScreen" element={<ChatScreen />} />
          <Route path="/exerciseTherapy" element={<ExerciseTherapy />} />
          <Route path="/education" element={<Education />} />
          <Route path="/mindfulness" element={<Mindfulness />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Landing;
