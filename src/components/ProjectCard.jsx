import "./ProjectCard.css";
  /* eslint react/prop-types: 0 */

export default function ProjectCard({ title, description, link, repo }) {

  return (
    <>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link}>Live</a> | <a href={repo}>Code</a>
    </>
  );
}
