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