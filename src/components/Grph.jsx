import React from "react";
import ReactApexChart from "react-apexcharts";

const Grph = () => {
  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: 2020,
        data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
      },
      {
        name: 2022,
        data: [10, 20, 40, 60, 20, 40, 60, 60, 20],
      }
    ],
    options: {
      chart: {
        type: "bar",
        height: 250,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          },
        },
      },
    },
  });

  return (
    <>
      <div className="container-fluid shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="col-md-12">
            <h4>Sales Summary</h4>
            <p>Yearly Sales Report</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={380} />
      </div>
      <div id="html-dist"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grph;
