import "./Project.sass";
export default function Project({ name, githubLink, description, index }) {
  return (
    <>
      <div className="project-container" style={{
        animation: `${(index / 2) + .75}s ease-in 0s 1 slideInLeft` }}>
          <h1>{name}</h1>
          <p>{description}</p>
          <a href={githubLink}>Github</a>
      </div>
    </>
  );
}
