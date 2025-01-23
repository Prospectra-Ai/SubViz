// RedditGraph.jsx
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const RedditGraph = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Clear previous SVG elements
    d3.select(svgRef.current).selectAll("*").remove();

    // Dimensions and padding
    const width = 400;
    const height = 400;
    const padding = 40;

    // Create SVG container
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + padding * 2)
      .attr("height", height + padding * 2)
      .call(
        d3.zoom().on("zoom", (event) => {
          svgGroup.attr("transform", event.transform);
        })
      );

    const svgGroup = svg
      .append("g")
      .attr("transform", `translate(${padding},${padding})`);

    // Process data for nodes and links
    const graphData = data.data.children.map((child, index) => ({
      id: child.data.subreddit_name_prefixed,
      permalink: `https://www.reddit.com${child.data.permalink}`,
      user: child.data.author,
      text: child.data.selftext,
      index,
    }));

    const links = graphData.flatMap((source, i) =>
      graphData.slice(i + 1).map((target, j) => ({
        source: i,
        target: i + 1 + j,
        sourceId: source.id,
        targetId: target.id,
      }))
    );

    // Force simulation setup
    const simulation = d3
      .forceSimulation(graphData)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.index)
          .distance(100)
          .strength(0.5)
      )
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(30));

    // Draw links
    const link = svgGroup
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#888")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 1);

    // Draw nodes
    const node = svgGroup
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graphData)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", "#6C28D8")
      .call(
        d3
          .drag()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Add labels with hyperlinks
    const labels = svgGroup
      .append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(graphData)
      .enter()
      .append("a")
      .attr("href", (d) => d.permalink)
      .attr("target", "_blank")
      .append("text")
      .text((d) => d.id)
      .attr("font-size", 12)
      .attr("fill", "#fff")
      .style("pointer-events", "all");

    // Simulation tick updates
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      labels.attr("x", (d) => d.x + 12).attr("y", (d) => d.y + 4);
    });
  }, [data]);

  return (
    <svg
      ref={svgRef}
      className="text-primary  items-center justify-center md:max-w-xl"
    />
  );
};

export default RedditGraph;
