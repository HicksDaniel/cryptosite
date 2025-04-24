import { useState, useEffect } from "react";
import BasicCard from "../../components/card";
import { Button } from "primereact/button";
import MenuBar from "../../components/menuBar";
import "primeflex/primeflex.css";
import { useCoinStore } from "../../stores/useCoinStore";
import DoughnutChart from "../../components/datacharts/doughnutchart";
import StyledLineChart from "../../components/datacharts/styledlinechart";
import CompoundLineChart from "../../components/datacharts/compoundlinechart";

export const Dashboard = () => {
  const { data, loading, error, fetchData } = useCoinStore();

  useEffect(() => {
    fetchData();
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }
  }, []);

  return (
    <div
      className="h-screen"
      style={{
        borderRadius: "50px",
        padding: "25px",
        width: "100%",
      }}
    >
      <button>TEST HERE</button>
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
      <div className="flex justify-content-center">
        <div className="flex justify-content-center w-8 flex-wrap">
          {data !== null && !loading && <BasicCard />}
          {data !== null && !loading && <DoughnutChart />}
          {data !== null && !loading && <StyledLineChart />}
          {data !== null && !loading && <CompoundLineChart />}
        </div>
      </div>
    </div>
  );
};
