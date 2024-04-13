// 数据数组
const data = [4, 8, 15, 16, 23, 42];

// 创建SVG容器
const width = 420, barHeight = 20;
const scale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width-20]);

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

// 创建条形图
const bar = svg.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", (d, i) => `translate(0,${i * barHeight})`);

bar.append("rect")
    .attr("width", scale)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", d => scale(d) - 3)
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(d => d);
