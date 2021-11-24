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
]

const getFileById = (id) => files.filter(d => d.id === id)[0];

const defaultId = "movies";

/** General D3 elements */

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
  .on("change",  (event, d) => {
    const tthis = event.currentTarget;
    renderPage(tthis.value)
   });

const options = fileSelector
  .selectAll("option")
  .data(files)
  .enter()
  .append("option")
  .attr("value", d => d.id)
  .text(d => d.title)
  .property("selected", d => (d.id === defaultId));

/** Render the content */

const renderPage = (fileId) => {

  container.html(null); // Reset Page 
  
  const file = getFileById(fileId);
 
  container.append("h1").attr("id", "title").text(file.title);

}

renderPage(defaultId); // Render page for the first time
