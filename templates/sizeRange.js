function init() {

    var ultimateColors = [
      ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
      ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
      ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
      ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
    ];

    // Setting up Bar Chart 1
    var topTen = [{
        x: [484.2,541.6,557.8,567,828.4,870.3,909, 1487.8,2273.6,2381.7],
        y: ['JPM','BRK.B','NVDA','TSLA','GOOG','GOOGL','FB','AMZN','MSFT','AAPL'],
        text: ['JP Morgan Chase','Berkshire Hathaway','Nvidia','Tesla','Alphabet C Class','Alphabet A Class','Facebook','Amazon','Microsoft','Apple'],
        type: 'bar',
        orientation: 'h',
        name: 'Top 10 Largest S&P 500 Companies by Capitalization',
        
      }];
      
    var topTen_layout = {
      title: 'Top 10 Largest S&P 500 Companies by Capitalization',
      
      xaxis: {
          title: 'Capitalization (Billions USD)',
          autorange: 'reversed'},
    //   yaxis: {side:'right'},
      height: 400,
      width: 500
      
    };
      
    Plotly.newPlot('bar1', topTen, topTen_layout);

// ------------------------------------------------------------------------------------------
    // Setting up Bar Chart 2
    var bottomTen = [{
        x: [5.06, 5.39, 5.45, 6.43, 6.5, 6.71, 7, 7.17, 7.2, 7.73],
        y: ['NOV ', 'UNM ', 'PRGO ', 'LEG ', 'COG ', 'HBI ', 'PBCT ', 'ALK ', 'APA ', 'NLSN '],
        text: ['National Oilwell Varco', 'Unum','Perrigo', 'Leggett and Platt','Cabot Oil and Gas', 'Hanesbrands','People\'s United', 'Alaska Air', 'Apache', 'Nielsen'],
        type: 'bar',
        orientation: 'h',
        name: 'Smallest 10 S&P 500 Companies by Capitalization',
        
      }];
      
    var bottomTen_layout = {
      title: 'Smallest 10 S&P 500 Companies by Capitalization',
      
      xaxis: {
          title: 'Capitalization (Billions USD)'},
      yaxis: {side:'right'},
      height: 400,
      width: 500
      
    };
      
    Plotly.newPlot('bar2', bottomTen, bottomTen_layout);
    


};

// Calling function to update webpage
init();

// Web page updates when change is made to dropdown
d3.selectAll("body").on("change", init);