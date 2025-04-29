import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";



import { menuItems } from "./navbarItems";
import { PrimeReactContext, APIOptions } from "primereact/api";

export default function MenuBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { changeTheme } = useContext<APIOptions>(PrimeReactContext);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsDarkMode(true);
    updateTheme();

  }, []);

  const handleClick = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    updateTheme();
  }

  const updateTheme = () => {
    if (!changeTheme) return;

    if (isDarkMode) {
      changeTheme("md-dark-deeppurple", "md-light-deeppurple", "theme-link");
    } else {
      changeTheme("md-light-deeppurple", "md-dark-deeppurple", "theme-link");
    }
  }




  return (
    <div className="flex align-items-center justify-content-between w-full  p-6 h-7rem">

      <Button onClick={handleClick} className="font-primary flex border-round-xl font-bold">
        Dark/Light Mode *
      </Button>
      <Menubar
        style={{ fontWeight: "500" }}
        pt={{
          menuitem: {
            style: { display: "flex", width: "auto", margin: "0px 5px" },
          },

          content: { style: {} },
        }}
        model={menuItems}
      />
    </div>
  );
}
