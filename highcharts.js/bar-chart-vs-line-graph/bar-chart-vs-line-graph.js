Highcharts.chart('container', {

  chart: {
    type: 'column',
    styledMode: true
  },
  tooltip: { 
     enabled: false,
  },
  title: {
    text: 'Styling axes and columns'
  },

  yAxis: [{
    className: 'highcharts-color-0',
    title: {
      text: 'Primary axis'
    }
  }, {
    className: 'highcharts-color-1',
    opposite: true,
    title: {
      text: 'Secondary axis'
    }
  }],

  plotOptions: {
    column: {
      borderRadius: 5
    }
  },

  series: [{
    data: [300, 200, 250, 300]
  }, {
    data: [324, 124, 547, 221],
    yAxis: 1
  }, {
    data: [100, 200, 300, 100],
    type: 'line',
    marker: {
      enabled: false
    },
    
  },

          ]

});
