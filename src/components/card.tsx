import CompoundLineChart from "./datacharts/compoundlinechart";

import { Card } from "primereact/card";

export default function BasicCard({ size, comp }) {
  return (
    <Card
      pt={{
        root: {
          style: {
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            justifyContent: "center",
            backgroundColor: "rgba(50,50,50,0.5)",

          },
        },
        body: {
          style: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "10px",
            margin: "0",
          }
        },
        content: {
          style: {
            display: "flex",
            width: "100%",
            borderRadius: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            border: "10px solid rgba(255, 255, 255, 0.3)",






          },
        },
      }}
      className={`flex  border-round-2xl shadow-6 h-23rem ${size}  m-2 p-1`}
    >
      {comp}
    </Card>
  );
}
