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
      <div className="flex align-items-center h-3rem">
        Introduction Tag
      </div>
      <div className="flex align-items-center h-4rem w-2 justify-content-evenly">
        <div className="border-round-sm p-2">Dataset 1</div>
        <div className="border-round-sm p-2">DataSet 2</div>
      </div>
      <div className="flex justify-content-center">
        <div className="flex justify-content-center w-full flex-wrap">

          {data !== null && !loading && <BasicCard size="w-full max-w-22rem" comp={""} />}
          {data !== null && !loading && <BasicCard size="w-10" comp={<StyledLineChart />} />}
          {data !== null && !loading && <BasicCard size="max-w-min" comp={<DoughnutChart />} />}
          {data !== null && !loading && <BasicCard size="w-10" comp={<CompoundLineChart />} />}
          {data !== null && !loading && <BasicCard size="w-full max-w-22rem" comp={""} />}



        </div>
      </div>
    </div>
  );
};
