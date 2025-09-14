const xValues = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
const yValues = [10.0,15.0,15.0,25.0,25.0,25.0,30.0,35.0,40.0,35.0,45.0];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(231, 147, 78, 0.77)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 5.0, max:50.0}}],
    }
  }
});