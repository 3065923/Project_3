var url = "http://127.0.0.1:5000/query"

function makeResponsive() {
    // if the SVG area isn't empty when the browser loads,
    // remove it and replace it with a resized version of the chart
    var svgArea = d3.select("body").select("svg");
    // clear svg is not empty
    if (!svgArea.empty()) {
      svgArea.remove();
    }
    // SVG wrapper dimensions are determined by the current width and
    // height of the browser window.
    var svgWidth = window.innerWidth * 0.7;
    var svgHeight = window.innerHeight * 0.8;

    //Set Margins
    var margin = {
        top: 20,
        right: 40,
        bottom: 150,
        left: 40
    };

    // Set Width and Height variables
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var url = "http://127.0.0.1:5000/query"

    d3.json(url).then(data=> {
            
            // console.log(data)

            var list = ["DOW", "EBAY", "IBM", "MCK", "NFLX", "NVDA", "PFE", "PG", "TXN", "VZ"];
            var weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

            var results_list = [];

            list.forEach( ticker => {
                results_list.push(data[ticker]['2020']);
            });

            var tickers = ["DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW","DOW",
                           "EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY","EBAY",
                           "IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM","IBM",
                           "MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK","MCK",
                           "NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX","NFLX",
                           "NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA","NVDA",
                           "PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE","PFE",
                           "PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG","PG",
                           "TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN","TXN",
                           "VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ","VZ"];
            
            var weeknumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                              "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
            var prediction = [];

           

            results_list.forEach(results => {
                // console.log(results)
                for (let i = 1; i <25; i++) { 
                                        
                    prediction.push(results[i]["Prediction"])
                }
            });

            var datums = [tickers, weeknumber, prediction];

            // console.log(tickers)

            // console.log(weeknumber)

            // console.log(prediction)
        
        
        // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
        const myGroups = weeknumber
        const myVars = list

        // Build X scales and axis:
        const x = d3.scaleBand()
            .range([ 0, width ])
            .domain(myGroups)
            .padding(0.05);
        svg.append("g")
            .style("font-size", 15)
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x).tickSize(0))
            .select(".domain").remove()

        // Build Y scales and axis:
        const y = d3.scaleBand()
            .range([ height, 0 ])
            .domain(myVars)
            .padding(0.05);
        svg.append("g")
            .style("font-size", 15)
            .call(d3.axisLeft(y).tickSize(0))
            .select(".domain").remove()

        // Build color scale
        const myColor = d3.scaleSequential()
            .interpolator(d3.interpolateInferno)
            .domain([0,1])

        // create a tooltip
        const tooltip = d3.select("#my_dataviz")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        // Three function that change the tooltip when user hover / move / leave a cell
        const mouseover = function(event,d) {
            tooltip
            .style("opacity", 1)
            d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
        }
        const mousemove = function(event,d) {
            tooltip
            .html("The exact value of<br>this cell is: " + d.value)
            .style("left", (event.x)/2 + "px")
            .style("top", (event.y)/2 + "px")
        }
        const mouseleave = function(event,d) {
            tooltip
            .style("opacity", 0)
            d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
        }

        // add the squares
        svg.selectAll()
            .data(datums, function(d) {
                return d;
                
                console.log(this);
            })
            .join("rect")
            .attr("x", function(d) { return x(1)}) //function(d) {return d[1]})
            .attr("y", function(d) {return y(datums)})
            .attr("rx", 10)
            .attr("ry", 10)
            .attr("width", x.bandwidth() )
            .attr("height", y.bandwidth() )
            .style("fill", function(d) {return d})
            .style("stroke-width", 4)
            .style("stroke", "none")
            .style("opacity", 0.8)
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)

        // // Add title to graph
        // svg.append("text")
        //         .attr("x", 0)
        //         .attr("y", -50)
        //         .attr("text-anchor", "left")
        //         .style("font-size", "22px")
        //         .text("A d3.js heatmap");

        // // Add subtitle to graph
        // svg.append("text")
        //         .attr("x", 0)
        //         .attr("y", -20)
        //         .attr("text-anchor", "left")
        //         .style("font-size", "14px")
        //         .style("fill", "grey")
        //         .style("max-width", 400)
        //         .text("A short description of the take-away message of this chart.");
        });

};

// When the browser loads, makeResponsive() is called.
makeResponsive();
// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive)