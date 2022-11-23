const projects = [];
const abouts = []
function makeProject(name, githubLink, description) {
  const project = {
    name,
    githubLink,
    description
  };
  projects.push(project);
}

function makeAbout(title, content) {
  const about = {
    title, 
    content
  }
  abouts.push(about)
}

makeAbout('Thoughtful design makes life easier', 'With a background in psychology and management, well-planned and executed systems have always been my goal.')
makeAbout('Endless learning', 'Nothing improves on its own, one must be willing to learn new and rapidly advancing technologies as time dictates.')
makeAbout('Hard Work', ' No amount of talent is a replacement for dedication and putting in the hours required to maximize potential.')


makeProject("YouCal", "https://github.com/Aphenphos/calendar", 'Calendar app built entirely with React and Vanilla JS. Make a Calendar, add events and share your calendar with other users!');
makeProject("WeSay", "https://github.com/Aphenphos/We-Say", 'Classic Simon game with increasing difficulties made with Vanilla JS and CSS only.');
makeProject("E-Commerce", "https://github.com/Aphenphos/Ecommerce-template-project/tree/dev", 'Easy to use e-commerce app from both a user and vendor perspective. Made with React, TypeScript and Node.');


export { projects, abouts };
