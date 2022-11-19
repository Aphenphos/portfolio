import "./Project.sass";
export default function Project({ name, link, description }) {
  return (
    <>
      <div className="project-container">
        <a href={link}>
          <h1>{name}</h1>
          <p>{description}</p>
        </a>
      </div>
    </>
  );
}
