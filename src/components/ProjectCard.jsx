/* eslint react/prop-types: 0 */

const ProjectCard = ({ title, description, link, repo }) => {
  return (
    <>
      <h4>{title}</h4>
      <p className="project-card">{description}</p>
      <a href={link}>Live</a> | <a href={repo}>Code</a>
    </>
  );
};

export default ProjectCard;
