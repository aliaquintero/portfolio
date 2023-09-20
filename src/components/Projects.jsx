import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="container">
      <h3>Projects</h3>
      <ProjectCard
        title="Greenstand"
        description="Developing open-source technology on a volunteer basis to address complex environmental problems through building microservices. Developing tools used to verify, tag, and export key data for the Admin Panel team."
        link="https://greenstand.org/"
        repo="https://github.com/Greenstand/treetracker-admin-client"
      />
      <ProjectCard
        title="Tidally"
        description="A web application that allows you to check both tides and weather near you. Built using WeatherAPI, you can view current weather conditions as well as tidal conditions by entering any location or using your current location, often in as little as one click."
        link="https://tidally.app"
        repo="https://github.com/aliaquintero/tidally"
      />
    </div>
  );
};
export default Projects;
