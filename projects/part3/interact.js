const xValues = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
const yValues = [10.0,15.0,15.0,25.0,25.0,25.0,30.0,35.0,40.0,35.0,45.0];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(231,147,289,0.77)",
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


const zValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myLines", {
  type: "line",
  data: {
    labels: zValues,
    datasets: [{
      data: [860,1140,1060,5000,1070,1110,1900,2210,7830,2478],
      borderColor: "red",
      fill: false
    },]
  },
  options: {
    legend: {display: false}
  }
});