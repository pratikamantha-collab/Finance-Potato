// visualizations.js

window.renderChart = function(type) {
  const container = d3.select("#d3-container");
  container.selectAll("*").remove(); // Clear previous
  
  const width = container.node().getBoundingClientRect().width;
  const height = container.node().getBoundingClientRect().height;
  const margin = {top: 20, right: 20, bottom: 30, left: 40};
  
  const svg = container.append("svg")
      .attr("width", width)
      .attr("height", height);

  // A simple interactive compound interest bar chart
  if (type === 'bar' || !type) {
    const data = Array.from({length: 30}, (_, i) => {
      const year = i + 1;
      const principal = 10000;
      const rate = 0.07;
      return { year, value: principal * Math.pow(1 + rate, year) };
    });

    const x = d3.scaleBand()
        .domain(data.map(d => d.year))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    // Add X axis
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickValues(x.domain().filter((d,i) => !(i%5))))
        .attr("color", "#94a3b8");

    // Add Y axis
    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(5).tickFormat(d => "$" + d/1000 + "k"))
        .attr("color", "#94a3b8");

    // Tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Bars
    svg.append("g")
        .attr("fill", "url(#bar-gradient)")
      .selectAll("rect")
      .data(data)
      .join("rect")
        .attr("x", d => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", height - margin.bottom) // Start at bottom for animation
        .attr("height", 0)
        .on("mouseover", function(event, d) {
          d3.select(this).attr("fill", "#60a5fa");
          tooltip.transition().duration(200).style("opacity", 1);
          tooltip.html("Year " + d.year + "<br/>$" + Math.round(d.value).toLocaleString())
               .style("left", (event.pageX + 10) + "px")
               .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
          d3.select(this).attr("fill", "url(#bar-gradient)");
          tooltip.transition().duration(500).style("opacity", 0);
        })
      .transition()
        .duration(1000)
        .delay((d, i) => i * 30)
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value));

    // Gradient
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
      .attr("id", "bar-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#3b82f6");
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#8b5cf6");
  }
};
