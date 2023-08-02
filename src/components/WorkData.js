import todos from "../assets/todos.jpg";
import wikipedia from "../assets/wikipedia.jpg";
import routing from "../assets/routing.jpg";
import ipl from "../assets/ipl.jpg";
import emoji from "../assets/emoji.jpg";
import foodmunch from "../assets/foodmunch.jpg";

const ProjectData = [
  {
    imgsrc: todos,
    title: "Todos Application",
    text: "Developed persistent todo application with CRUD operations to track list of tasks. Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations. Used Arrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on page reloads using local storage methods.",
    view: "https://bhargavstodos.ccbp.tech",
    source: "https://github.com/bhargavdevelopers/TodoApplication",
  },

  {
    imgsrc: wikipedia,
    title: "Wikipedia Search Application",
    text: "Developed custom wikipedia search application where user can search and view curate results and can see detailed explanation in wikipedia by clicking on the specific result.Displayed list of search results with HTML list elements with hyperlink as url. Fetched search results from server asynchronously using fetch GET HTTP API call. When a user clicks on a particular result, opens the website in a new tab.",
    view: "https://vkisearchengine.ccbp.tech",
    source: "https://github.com/bhargavdevelopers/WikisearchEngineClone",
  },

  {
    imgsrc: routing,
    title: "React-Routing and Fetching details",
    text: "Developed responsive react application with implementation of react-routing and fetching of the url and displaying the data from the url and redirect to specific routes when we click on specific element by using of react route module from react router dom and Displayed list of data with HTML list elements, styled data list using CSS, Bootstrap.",
    view: "https://routenfetch.ccbp.tech",
    source:
      "https://github.com/bhargavdevelopers/reactRoutingAPIsFetchingUsingReact",
  },

  {
    imgsrc: ipl,
    title: "Simple IPL Dashboard Application",
    text: "Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info Implemented UI such as home dashboard, individual team info routes by using React Router library components. Fetched teams list from server asynchronously, matches info by sending team id as path parameter. Implemented 404 not found page for invalid paths by keeping 404 Route as last route in the Switch component with * path.",
    view: "https://rjsiplboard.ccbp.tech",
    source: "https://github.com/bhargavdevelopers/iplDashboardUsingReact",
  },

  {
    imgsrc: emoji,
    title: "Emoji Game Application",
    text: "Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all displayed emojis are clicked. All emojis positions will be randomized after each click List of Emojis is displayed by using React components, props , lists, conditional rendering, styled using CSS and randomized emojis placed using event listeners by updating react state. Updated different game states such as emojis list, winning state and losing state by using game state variable and conditional rendering.",
    view: "https://emojygmz.ccbp.tech",
    source: "https://github.com/bhargavdevelopers/EmojiGame",
  },

  {
    imgsrc: foodmunch,
    title: "Static Food-Munch Application",
    text: "Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach. Implemented product youtube videos by using bootstrap embed and model components",
    view: "https://gbsfood.ccbp.tech",
    source: "https://github.com/bhargavdevelopers/foodmunch",
  },
];

export default ProjectData;
