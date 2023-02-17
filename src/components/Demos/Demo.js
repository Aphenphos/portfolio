import "./Demo.sass";

export default function Demo({ name, link, image, index }) {
  return (
    <>
      <div
        className="demo-container"
        style={{
          backgroundImage: `url(${image})`,
          animation: `${index / 2 + 0.75}s ease-in 0s 1 slideDown`,
        }}
      >
        <a href={link}>
          <h2>{name}</h2>
        </a>
      </div>
    </>
  );
}
