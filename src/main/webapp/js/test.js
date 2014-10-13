$(document).ready(function() {
	$.getJSON("data01.json")
	.done(function(data){
		setupLines(data.paths);
		setupNodes(data.nodes);
	});
	
	function setupNodes(nodes) {
		d3.select("#chart").selectAll("circle")
			.data(nodes)
			.enter().append("circle")
			.style("fill", "blue")
			.style("stroke", "black")
			.attr("cx", function(d) { return d.x })
			.attr("cy", function(d) { return d.y })
			.attr("r", function(d) { return d.r });			
	}
	
	function setupLines(lines) {
		d3.select("#chart").selectAll("line")
		   .data(lines)
		   .enter().append("line")
		   .attr("x1", function(d) { return d.sx })
		   .attr("y1", function(d) { return d.sy })
		   .attr("x2", function(d) { return d.dx })
		   .attr("y2", function(d) { return d.dy })
		   .style("stroke", "black");		
	}
	
	d3.select("#chart").style("background-color", "white");
});

console.log("test.js loaded");