import ProjectSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

import { useState } from "react";

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProject: undefined,
    projects: [],
  }); 

  function handleStartAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProject: null,
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevProjectsState) => {
      const newProject = {
        ...projectData,
        id : Math.random()
      };

      return {
        ...prevProjectsState,
        selectedProject: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  };

  function handleCancelProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProject: undefined,
      }
    });
  }

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject onSave={handleAddProject} onCancel={handleCancelProject} />
  } else {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
