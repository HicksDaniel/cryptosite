import { useState } from "react";
import { Routes, Route } from "react-router";
import { PrimeReactProvider } from "primereact/api";

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
import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-deeppurple/theme.css";

export const App = () => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <PrimeReactProvider>
      <div
        // style={{ minWidth: "325px" }}
        className="flex justify-content-center flex-column w-full"
      >
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
    </PrimeReactProvider>
  );
};
