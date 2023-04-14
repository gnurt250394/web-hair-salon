import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Analytics from 'pages/Dashboard/Analytics';
import Calendar from 'pages/Calendar';
import Profile from 'pages/Profile';
import FormElements from 'pages/Form/FormElements';
import FormLayout from 'pages/Form/FormLayout';
import Tables from 'pages/Tables';
import Settings from 'pages/Settings';
import Chart from 'pages/Chart';
import Alerts from 'pages/UiElements/Alerts';
import Buttons from 'pages/UiElements/Buttons';
import SignIn from 'pages/Authentication/SignIn';
import SignUp from 'pages/Authentication/SignUp';
import CreateService from 'pages/Services/CreateService';

const App = () => {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return !loading ? (
    <>
      <Routes>
        <Route path="/" element={<Analytics />} />
        <Route path="/" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forms/form-elements" element={<FormElements />} />
        <Route path="/them-dich-vu" element={<CreateService />} />
        <Route path="/dich-vu" element={<Tables />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/ui/alerts" element={<Alerts />} />
        <Route path="/ui/buttons" element={<Buttons />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  ) : null;
};

export default App;
