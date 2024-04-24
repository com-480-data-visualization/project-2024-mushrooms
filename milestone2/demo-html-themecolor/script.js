document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { season: "Spring", value: 2727}, 
        { season: "Summer", value: 22898}, 
        { season: "Autumn", value: 30177 }, 
        { season: "Winter", value: 5267}
    ];

    const themeColors = {
        "Spring": "#a8e4a0",
        "Summer": "#ffd700",
        "Autumn": "#ff6347",
        "Winter": "#add8e6"
    };

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 560 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#visualization").append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .domain(data.map(d => d.season));

    const y = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([0, d3.max(data, d => d.value)]);

    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    svg.append("g")
        .call(d3.axisLeft(y));

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.season))
        .attr("y", d => y(d.value))
        .attr("height", d => height - y(d.value))
        .attr("width", x.bandwidth())
        .attr("fill", "steelblue")
        .on("click", function(event, d) {
            document.body.style.backgroundColor = themeColors[d.season];
            d3.selectAll(".bar").attr("fill", themeColors[d.season]); // 更改所有bar的颜色
        });
});
