const projects = [];
const abouts = []
function makeProject(name, link, description) {
  const project = {
    name,
    link,
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
makeAbout('Hard Work', ' No amount of talent is a replacement for dedication to putting in the hours required to maximize potential.')


makeProject("YouCal", "https://spiffy-rabanadas-a14f8b.netlify.app/", 'Calendar app built entirely with React and Vanilla JS. Make a Calendar, add events and share your calendar with other users!');
makeProject("WeSay", "https://spiffy-rabanadas-a14f8b.netlify.app/", 'Classic Simon game with increasing difficulties made with Vanilla JS and CSS only.');


export { projects, abouts };
