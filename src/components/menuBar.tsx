import { useState } from "react";
import { useNavigate } from "react-router";

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

import { menuItems } from "./navbarItems";

export default function MenuBar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const updatePage = async () => {
    setLoading(true);
    await await new Promise((r) => setTimeout(r, 2000));
    navigate("/dashboard");
    setLoading(false);
  };

  return (
    <div
      className="flex align-items-center justify-content-between w-full  p-6 h-7rem"
    >
      <Button className="font-primary flex border-round-xl font-bold">
        Snow Lake
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
