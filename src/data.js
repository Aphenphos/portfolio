const projects = [];
const abouts = [];
const demos = [];
function makeProject(name, githubLink, deployLink, description) {
  const project = {
    name,
    githubLink,
    deployLink,
  };
  projects.push(project);
}

function makeAbout(title, content) {
  const about = {
    title,
    content,
  };
  abouts.push(about);
}

makeAbout("Location", "Rochester NY MaxwillWinters@gmail.com");
makeAbout(
  "Tech Stack",
  "Python, JavaScript/TypeScript (Node, React, Solid), C#/.NET, HTML/CSS/SASS, PSQL/MySQL/MongoDB, VirtualBox/VMWare, Windows/Linux, Bash, Selenium"
);
makeAbout(
  "Interests",
  "Solving complex problems with clean, performant and elegant solutions. Fascinated with AI and Unreal5."
);
makeAbout(
  "Non Programming",
  "Reading, Religion and Gaming are my main interests outside of more professional matters. Favorite Author is easily C.S Lewis (Space Trilogy)"
)


makeProject(
  "Atel Programming Language",
  "https://github.com/Aphenphos/atel"
)
makeProject(
  "Better Cam (DXF to GCODE)",
  "https://github.com/Aphenphos/betterCam"
)
makeProject(
  "Audio Visualiser",
  "https://github.com/Aphenphos/Ikou",
  "https://ikou.netlify.app/"
);
makeProject(
  "YouTube Generator",
  "https://github.com/Aphenphos/YTGenerator",
  "https://www.youtube.com/@LodusValorant"
);

makeProject(
  "ArubaWebDevs",
  "https://github.com/Aphenphos/arubawebdevs/tree/main/src",
  "https://arubawebdevs.netlify.app/"
);
makeProject(
  "E-Commerce from 'Scratch'",
  "https://github.com/Aphenphos/Ecommerce-template-project/tree/main"
);

export { projects, abouts, demos };
