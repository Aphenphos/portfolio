const projects = [];
const abouts = [];
const demos = [];
function makeProject(name, githubLink, deployLink, description) {
  const project = {
    name,
    githubLink,
    deployLink,
    description,
  };
  projects.push(project);
}

function makeDemo(name, link, image) {
  const demo = {
    name,
    link,
    image,
  };
  demos.push(demo);
}

function makeAbout(title, content) {
  const about = {
    title,
    content,
  };
  abouts.push(about);
}

makeAbout(
  "Thoughtful design makes life easier",
  "With a background in psychology and management, well-planned and executed systems have always been my goal."
);
makeAbout(
  "Endless learning",
  "Nothing improves on its own, one must be willing to learn new and rapidly advancing technologies as time dictates."
);
makeAbout(
  "Hard Work",
  " No amount of talent is a replacement for dedication and putting in the hours required to maximize potential."
);

makeProject(
  "E-Commerce",
  "https://github.com/Aphenphos/Ecommerce-template-project/tree/dev",
  null,
  "Easy to use e-commerce app from both a user and vendor perspective. Made with React, TypeScript and Node."
);
makeProject(
  "Project SinVes",
  "https://github.com/Aphenphos/sinves",
  null,
  "Project to get a bit deeper into ASP.NET. Full CRUD API with JWT authentication."
);
makeProject(
  "YouCal",
  "https://github.com/Aphenphos/calendar",
  null,
  "Calendar app built entirely with React and Vanilla JS. Make a Calendar, add events and share your calendar with other users!"
);
makeProject(
  "ProjManager",
  "https://github.com/Aphenphos/projmanagerv2",
  null,
  "Simple note taking style api with a basic front end. Used as a learning experience for Java Spring/SpringBoot and Spring Security."
);
makeDemo(
  "NixieTubes",
  "https://nixontubes.netlify.app/",
  "https://res.cloudinary.com/dyhgjtafr/image/upload/v1676610515/nixtubes_bdcttw.png"
);
makeDemo(
  "ArubaWebDevs",
  "https://arubawebdevs.netlify.app/",
  "https://res.cloudinary.com/dyhgjtafr/image/upload/v1676610282/auawebdev_ywi86p.jpg"
);
makeDemo(
  "AudioVisualiser",
  "https://ikou.netlify.app/",
  "https://res.cloudinary.com/dyhgjtafr/image/upload/v1677206715/6a0de19a1d1df727ffda92c3183fd029_yifbic.png"
);

export { projects, abouts, demos };
