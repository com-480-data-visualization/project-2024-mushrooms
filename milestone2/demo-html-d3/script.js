// Function to draw a scatter plot
function drawScatterPlot(data) {
    const margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    // Set up the scales
    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d['cap-diameter'])])
                     .range([0, width]);

    const yScale = d3.scaleBand()
                     .domain(data.map(d => d['cap-color']))
                     .rangeRound([height, 0])
                     .padding(0.1);

    // Set up the SVG container
    const svg = d3.select('#visualization').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Add the circles for scatter plot
    svg.selectAll(".dot")
        .data(data)
      .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3.5)
        .attr("cx", d => xScale(d['cap-diameter']))
        .attr("cy", d => yScale(d['cap-color']))
        .style("fill", d => d['class'] === 'p' ? 'red' : 'green');

    // Add the X Axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(yScale));
}

const path_to_mushroom = "..\\..\\dataset\\mushroom.csv";  // Path to the mushroom dataset
// Load data from an external CSV file
d3.csv(path_to_mushroom).then(data => {
    data.forEach(d => {
        d['cap-diameter'] = +d['cap-diameter']; // convert to numeric
    });
    drawScatterPlot(data);
});

d3.csv(path_to_mushroom).then(data => {
    console.log("Data loaded:", data);  // 检查数据是否正确加载
    if (data.length > 0) {
        data.forEach(d => {
            d['cap-diameter'] = +d['cap-diameter']; // convert to numeric
        });
        drawScatterPlot(data);
    } else {
        console.error("No data to display.");
    }
}).catch(error => {
    console.error("Error loading the data:", error);
});
