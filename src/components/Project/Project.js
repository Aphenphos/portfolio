import "./Project.sass";
export default function Project({
  name,
  githubLink,
  deployLink,
  description,
  index,
}) {
  return (
    <>
      <div
        className="project-container"
        style={{
          animation: `${index / 2 + 0.75}s ease-in 0s 1 slideInLeft`,
        }}
      >
        <h1>{name}</h1>
        <p>{description}</p>
        <div id="link-cont">
          <a href={githubLink}>Github</a>
          {deployLink ? <a href={deployLink}>Deployment</a> : <></>}
        </div>
      </div>
    </>
  );
}
