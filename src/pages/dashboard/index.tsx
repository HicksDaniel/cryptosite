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
    <div className="p-4 w-full">
      <div className="flex align-items-center h-3rem">Introduction Tag</div>
      <div className="flex align-items-center h-4rem w-2 justify-content-evenly">
        <div className="border-round-sm p-2">Dataset 1</div>
        <div className="border-round-sm p-2">DataSet 2</div>
      </div>
      <div className="flex justify-content-center">
        <div className="grid justify-content-center w-full">
          {data !== null && !loading && (
            <BasicCard size="col-6 min-w-min" comp={<StyledLineChart />} />
          )}
          {data !== null && !loading && (
            <BasicCard size="col-6 min-w-min" comp={<StyledLineChart />} />
          )}
          {data !== null && !loading && (
            <BasicCard size="col-3 min-w-min" comp={<DoughnutChart />} />
          )}
          {data !== null && !loading && (
            <BasicCard size="col-6 min-w-max" comp={<CompoundLineChart />} />
          )}
          {data !== null && !loading && (
            <BasicCard size="col-3 min-w-min" comp={<DoughnutChart />} />
          )}
        </div>
      </div>
    </div>
  );
};
