/** JSON data declaration */

const files = [
  {
    id: "kickstarter",
    title: "Kickstarter Pledge",
    description: "Top 100 Most Pledged Kickstarter Campaigns Grouped By Category",
    path: "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json"
  },
  {
    id: "movies",
    title: "Movie Sales",
    description: "Top 100 Highest Grossing Movies Grouped By Genre",
    path: "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json"
  },
  {
    id: "videogames",
    title: "Video Game Sales",
    description: "Top 100 Most Sold Video Games Grouped by Platform",
    path: "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json"
  }
];

const getFileById = (id) => files.filter((d) => d.id === id)[0];

const defaultId = "kickstarter";

/** Initialize general D3 elements */

// Main container

const container = d3
  .select("body")
  .append("div")
  .classed("container", true);

// File selector combo

const fileSelector = d3
  .select("body")
  .append("div")
  .classed("selector-container", true)
  .append("select")
  .attr("id", "file_selector")
  .attr("name", "file_selector")
  .classed("file-selector", true)
  .on("change", (event, d) => {
    const tthis = event.currentTarget;
    renderPage(tthis.value);
  });

const options = fileSelector
  .selectAll("option")
  .data(files)
  .enter()
  .append("option")
  .attr("value", (d) => d.id)
  .text((d) => d.title)
  .property("selected", (d) => d.id === defaultId);

/********************/
/** Content render **/
/********************/

const renderPage = (fileId) => {

  const file = getFileById(fileId);

  // Reset Page
  
  container.html(null); 

  // Initialize headers

  const title = container
    .append("h1")
    .attr("id", "title")
    .attr("class", "title")
    .text(file.title);

  const subtitle = container
    .append("h3")
    .attr("id", "description")
    .attr("class", "subtitle")
    .text(file.description);

  // Initialize diagram

  const [svgWidth, svgHeight] = [1000, 650];

  const diagram = container
    .append("svg")
    .attr("id", "tree-map")
    .attr("class", "tree-map")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .text(file.title);

  // Initialize treemap

  const treemap = d3
    .treemap()
    .size([svgWidth, svgHeight])
    .paddingInner(0.5) // Padding between each rectangle
    .padding(1.5); 

  // Create color scale
  // More info: https://observablehq.com/@d3/color-schemes

  /* 
    SchemeCategory20 is not provided anymore by last versions 
    of D3. I create my own categorical scale taking values 
    from the example.  
  */
  
  const interpolation = (c) => d3.interpolateHcl(c, '#0000CC')(0.1);
    
  const colorScale = d3
    .scaleOrdinal()
    .range(
      [
        '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c',
        '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5',
        '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f',
        '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'
      ].map(interpolation).reverse()
  );
  
  /** Load JSON */

  d3.json(file.path)
    .then((data) => {
      
    // Create hierarchy
      // More info: https://github.com/d3/d3-hierarchy

      const hierarchy = d3
        .hierarchy(data)
        .eachBefore((d) => {
          d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name;
        })
        .sum((d) => d.value)
        .sort((a, b) => b.height - a.height || b.value - a.value);

      treemap(hierarchy);

      // Draw cells

      const cellGroup = diagram
        .selectAll("g")
        .data(hierarchy.leaves())
        .enter()
        .append("g")
        .attr("class", "cell-group")
        .attr("transform", (d) => `translate(${d.x0}, ${d.y0})`);

      const cell = cellGroup
        .append("rect")
        .attr("id", (d) => d.data.id)
        .attr("class", "tile")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("data-name", (d) => d.data.name)
        .attr("data-category", (d) => d.data.category)
        .attr("data-value", (d) => d.data.value)
        .attr("fill", (d) => colorScale(d.data.category))
      // text.style("fill", function(d) { return d3.hsl(color(d)).l > 0.5 ? "#000" : "#fff" })
      ;
  
    const fontSize = 9;
    
    const textMargin = 3;
    
    const cellText = cellGroup
      .append('text')
      .attr('class', 'tile-text')
      .attr("transform", (d) => `translate(${textMargin}, ${textMargin})`)
      .selectAll('tspan')
      .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
      //.data(d => d.data.name.split(" "))
      .enter()
      .append('tspan')
      .style("font-size", fontSize)
      .attr('x', 0)
      .attr('dy', fontSize)
      .text(d => d)
      //.each((p, j) => (console.log(d3.select(this).node())))
    })
    
        /*      
    const cellText = cellGroup
      .append('text')
      .attr('class', 'tile-text')
      .selectAll('tspan')
      //.data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
      .data(d => d.data.name.split(" "))
      .enter()
      .append('tspan')
      .attr('x', 4)
      //.attr('y', (d, i) => (13 + i * 10))
      .attr('dy', 10)
      .text(d => d)    
    }) */
    .catch((err) => console.error(err));
};

renderPage(defaultId); // Render page for the first time
