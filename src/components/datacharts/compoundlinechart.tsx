import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { useCoinStore } from "../../stores/useCoinStore";

export default function CompoundLineChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const { data, userCoins, loading, error, fetchData } = useCoinStore();
  const bitcoin = data.find((c) => c.name === "bitcoin");
  const ethereum = data.find((c) => c.name === "ethereum");
  const dogecoin = data.find((c) => c.name === "dogecoin");
  const userBitcoin = userCoins.find((c) => c.name === "bitcoin");
  const userEthereum = userCoins.find((c) => c.name === "ethereum");
  const userDogecoin = userCoins.find((c) => c.name === "dogecoin");

  const handleClick = () => {
    console.log(chartData.datasets);
    console.log(chartOptions);
  };

  const calculatePricingDifference = (coin1, coin2) => {
    const array1 = coin1;
    const array2 = coin2;

    const sum = array1.map((num, i) => {
      return num + array2[i];
    });
    return sum;
  };
  const calculatePricingDifferenceAgain = (coin1, coin2, coin3) => {
    const array1 = coin1;
    const array2 = coin2;
    const array3 = coin3;

    const sum = array1.map((num, i) => {
      return num + array2[i] + array3[i];
    });
    return sum;
  };

  const calculatePercentageChange = (coinData, userData) => {
    const currentPrice = coinData?.currentPrice;

    const userCoinValue = [
      userData * currentPrice,
      (userData * currentPrice) / (1 + coinData?.pcp_1h / 100),
      (userData * currentPrice) / (1 + coinData?.pcp_24h / 100),
      (userData * currentPrice) / (1 + coinData?.pcp_7day / 100),
      (userData * currentPrice) / (1 + coinData?.pcp_14day / 100),
      (userData * currentPrice) / (1 + coinData?.pcp_30day / 100),
      (userData * currentPrice) / (1 + coinData?.pcp_60day / 100),
      (userData * currentPrice) / (1 + coinData?.pcp_200day / 100),
      (userData * currentPrice) / (1 + coinData?.pcp_1year / 100),
    ];

    return userCoinValue;
  };

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const data = {
      labels: [0, 0.15, 1, 7, 14, 30, 60, 200, 365],
      datasets: [
        {
          label: bitcoin?.name,
          data: calculatePercentageChange(
            bitcoin?.marketData?.pricing,
            userBitcoin?.owned
          ),

          fill: true,
          tension: 0.4,
          backgroundColor: documentStyle.getPropertyValue("--green-500"),
        },
        {
          label: ethereum?.name,
          data: calculatePricingDifference(
            calculatePercentageChange(
              bitcoin?.marketData?.pricing,
              userBitcoin?.owned
            ),
            calculatePercentageChange(
              ethereum?.marketData?.pricing,
              userEthereum?.owned
            )
          ),
          fill: true,
          tension: 0.4,
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
        },
        {
          label: dogecoin?.name,
          data: calculatePricingDifferenceAgain(
            calculatePercentageChange(
              bitcoin?.marketData?.pricing,
              userBitcoin?.owned
            ),
            calculatePercentageChange(
              ethereum?.marketData?.pricing,
              userEthereum?.owned
            ),
            calculatePercentageChange(
              dogecoin?.marketData?.pricing,
              userDogecoin?.owned
            )
          ),
          fill: true,
          borderColor: documentStyle.getPropertyValue("--yellow-500"),
          tension: 0.4,
          backgroundColor: "rgba(255,167,38)",
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 1,

      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          afterTickToLabelConversion: (ctx) => {
            ctx.ticks = [];
            ctx.ticks.push({ value: 0, label: "Current" });
            ctx.ticks.push({ value: 0.15, label: "1h" });
            ctx.ticks.push({ value: 1, label: "24h" });
            ctx.ticks.push({ value: 7, label: "7 Days" });
            ctx.ticks.push({ value: 14, label: "14 Days" });
            ctx.ticks.push({ value: 30, label: "30 Days" });
            ctx.ticks.push({ value: 60, label: "60 Days" });
            ctx.ticks.push({ value: 200, label: "200 Days" });
            ctx.ticks.push({ value: 365, label: "1 year" });
          },
          reverse: true,
          type: "logarithmic",

          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card w-full">
      <Chart
        onClick={handleClick}
        className="w-full"
        type="line"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
}
