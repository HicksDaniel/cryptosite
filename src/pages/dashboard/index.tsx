import { useState, useEffect } from "react";
import BasicCard from "../../components/card";
import { Button } from "primereact/button";
import { RadioButton } from 'primereact/radiobutton';
import MenuBar from "../../components/menuBar";
import "primeflex/primeflex.css";
import { useCoinStore } from "../../stores/useCoinStore";
import DoughnutChart from "../../components/datacharts/doughnutchart";
import StyledLineChart from "../../components/datacharts/styledlinechart";
import CompoundLineChart from "../../components/datacharts/compoundlinechart";

const chartCategories = [
  { name: "Compound L Chart", key: "C", showing: false, comp: <CompoundLineChart /> },
  { name: "Doughnut Chart", key: "D", showing: false, comp: <DoughnutChart /> },
  { name: "Styled Line Chart", key: "S", showing: false, comp: <StyledLineChart /> },
]

export const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(chartCategories[1]);
  const [showingCharts, setShowingCharts] = useState([])
  const { data, loading, error, fetchData } = useCoinStore();
  let chartArray = []

  function updateChartArray(value) {

    const update = chartArray.map((chart) => {
      if (chart.name === value.name) {
        return { ...chart, showing: true };
      }
      console.log(chart)
      return chart;
    });
  }


  const renderedRadioButtons = (
    chartCategories.map((category) => {
      chartArray.push(category)
      return (
        <div key={category.key} className="flex align-items-center">
          <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => { updateChartArray(e.value), setSelectedCategory(e.value) }} checked={selectedCategory.key === category.key} />
          <label htmlFor={category.key} className="ml-4">{category.name}</label>
        </div>
      );

    })
  )

  const renderedGraphs = (
    chartArray.map((c) => {
      {
        c.showing === true && data !== null && !loading && (
          <BasicCard size="col-6 min-w-min" comp={c.comp} />
        )
      }
    })
  )


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
        <div className="flex align-items-center">
          {renderedRadioButtons}
          <button onClick={() => console.log(chartArray)}>ChartArray</button>
          <button onClick={() => console.log(selectedCategory)}>SelectedCategory</button>

        </div>
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

        </div>
      </div>
    </div>
  );
};
