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

export { projects, abouts, demos };
