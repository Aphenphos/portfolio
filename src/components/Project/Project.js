import "./Project.sass";
export default function Project({ name, link, description, index }) {
  return (
    <>
      <div className="project-container" style={{
        animation: `${(index / 2) + .75}s ease-out 0s 1 slideInLeft` }}>
        <a href={link}>
          <h1>{name}</h1>
          <p>{description}</p>
        </a>
      </div>
    </>
  );
}
