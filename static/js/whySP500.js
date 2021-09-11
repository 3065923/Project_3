function init() {

    var ultimateColors = [
      ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
      ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
      ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
      ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
    ];

    // Setting up Pie Chart 1
    var percentMarketbyNumber = [{
        values: [505, 3766],
        labels: ['S&P 500', 'Remainder of Market'],
        type: 'pie',
        name: 'S&P 500 by Percentage of US Companies',
        marker: {
          colors: ultimateColors[2]
        }
      }];
      
    var percentMarketbyNumber_layout = {
      title: 'S&P 500 by Percentage of Public US Companies',
      height: 400,
      width: 500
    };
      
    Plotly.newPlot('bubble1', percentMarketbyNumber, percentMarketbyNumber_layout);

// ------------------------------------------------------------------------------------------
    // Setting up Pie Chart 2
    var percentMarketbyCapitalization = [{
      values: [80, 20],
      labels: ['S&P 500', 'Remainder of Market'],
      type: 'pie',
      name: 'S&P 500 by Percentage of US Capitalization',
      marker: {
        colors: ultimateColors[2]
      }
    }];
      
    var percentMarketbyCapitalization_layout = {
      title: 'S&P 500 by Percentage of US Capitalization',
      height: 400,
      width: 500,
      // showlegend: false
    };
      
    Plotly.newPlot('bubble2', percentMarketbyCapitalization, percentMarketbyCapitalization_layout);


};

// Calling function to update webpage
init();

// Web page updates when change is made to dropdown
d3.selectAll("body").on("change", init);