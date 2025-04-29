import CompoundLineChart from "./datacharts/compoundlinechart";

import { Card } from "primereact/card";

export default function BasicCard({ size, comp }) {
  return (
    <div className={`flex justify-content-center ${size}`}>
      <Card
        pt={{
          root: {
            style: {
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",

              outline: "1px solid rgba(0,0,0,0.1)",
            },
          },
          body: {
            style: {
              display: "flex",
              width: "100%",
              alignItems: "center",
              padding: "10px",
              margin: "0",
            },
          },
          content: {
            style: {
              display: "flex",
              width: "100%",
              borderRadius: "50px",
            },
          },
        }}
        className={`flex p-fluid min-w-min border-round-2xl shadow-6 h-23rem m-2 p-1`}
      >
        {comp}
      </Card>
    </div>
  );
}
