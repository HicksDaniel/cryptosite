import React from "react";
import { Button } from "primereact/button";
import BasicCard from "../../components/card";
import MenuBar from "../../components/menuBar";

export const Events = () => {
  return (
    <div
      className="h-screen"
      style={{
        borderRadius: "50px",
        padding: "25px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "50px",
          alignItems: "center",
        }}
      >
        Introduction Tag
      </div>

      <div
        style={{
          display: "flex",
          height: "80px",
          alignItems: "center",
          border: "5px solid black",
        }}
      >
        <div>Dataset 1</div>
        <div>DataSet 2</div>
      </div>
      <div className="flex">
        <div className="flex justify-content-evenly flex-wrap">
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
        </div>
      </div>
    </div>
  );
};
