(async function getProjects() {
  try {
    const response = await fetch('/api/projects');
    const result = await response.json();

    const projectsDiv = document.getElementById('projects');

    result.projects.map((project) => {
      const projectDiv = document.createElement('div');

      const titleHeader = document.createElement('h4');
      titleHeader.classList.add('project-title');
      titleHeader.innerText = project.title;

      const duration = document.createElement('p');
      duration.classList.add('project-duration');
      duration.innerText = `${project.startDate.slice(0, 10).replace(/-/g, '/')} - ${project.endDate.slice(0, 10).replace(/-/g, '/')}`;

      const descriptionP = document.createElement('p');
      descriptionP.classList.add('project-description');
      descriptionP.innerText = project.description;

      console.log(project.gitLink);
      const text = document.createElement('p');
      text.classList.add('project-link');

      const linkElement = document.createElement('a');
      linkElement.href = project.gitLink;
      linkElement.innerText = project.gitLink;

      text.appendChild(linkElement);

      projectDiv.appendChild(titleHeader);
      projectDiv.appendChild(duration);
      projectDiv.appendChild(descriptionP);
      projectDiv.appendChild(text);
      projectsDiv.appendChild(projectDiv);
    });

    /*
          show the result on the page...
          do it in a scalable way that works even if you add new projects
          */
  } catch (error) {
    console.log(error);
  }
}());
