import { useState, useContext } from "react";
import { Routes, Route } from "react-router";
import { Dashboard } from "./pages/dashboard";
import { News } from "./pages/news";
import { Donations } from "./pages/donations";
import { Membership } from "./pages/membership";
import { Events } from "./pages/events";
import { Contacts } from "./pages/contacts";
import MenuBar from "./components/menuBar";

import { Login } from "./pages/login";

import "./App.css";
import "primeflex/primeflex.css";
// import "primereact/resources/themes/md-light-deeppurple/theme.css";
// import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import "primeicons/primeicons.css";
import { ThemeContext } from "./components/common/themeprovider.tsx";

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [userAuth, setUserAuth] = useState(false);

  console.log(theme);

  return (
    <div className="flex justify-content-center flex-column w-full">
      <button onClick={toggleTheme}>Toggle Theme</button>
      {userAuth ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <>
          <MenuBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="membership" element={<Membership />} />
            <Route path="news" element={<News />} />
            <Route path="donations" element={<Donations />} />
            <Route path="events" element={<Events />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </>
      )}
    </div>
  );
};
