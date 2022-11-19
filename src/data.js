const projects = [];
function makeProject(name, link, description) {
  const project = {
    name,
    link,
    description
  };
  projects.push(project);
}

makeProject("YouCal", "https://spiffy-rabanadas-a14f8b.netlify.app/", 'Calendar app built entirely with React and Vanilla JS. Make a Calendar, add events and share your calendar with other users!');
makeProject("WeSay", "https://spiffy-rabanadas-a14f8b.netlify.app/", 'Classic Simon game with increasing difficulties made with Vanilla JS and CSS only.');


export { projects };
