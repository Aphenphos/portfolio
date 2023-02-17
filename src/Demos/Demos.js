import Demo from "../components/Demos/Demo";
import "./Demos.sass";
import { demos } from "../data";
export default function Demos() {
  return (
    <>
      <div id="demo-container">
        {demos.map((d, index) => (
          <Demo key={index} name={d.name} link={d.link} image={d.image}></Demo>
        ))}
      </div>
    </>
  );
}
