import CompoundLineChart from "./datacharts/compoundlinechart";

import { Card } from "primereact/card";

export default function BasicCard() {
  return (
    <Card
      pt={{
        root: {
          style: {
            backgroundColor: "#969696",
          },
        },
        body: {
          style: {
            backgroundColor: "rgba(195,195,195,1)",
            borderRadius: "50px",
            display: "flex",
            width: "99%",
            height: "95%",
            padding: "20px",
            margin: "",
          },
        },

        content: {
          style: {
            display: "flex",
            borderRadius: "50px",
            backgroundColor: "rgba(220,220,220,.2)",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          },
        },
      }}
      className="flex border-round-3xl shadow-6 justify-content-center align-items-center w-25rem h-22rem p-0 m-0"
    >
      <CompoundLineChart />
    </Card>
  );
}
