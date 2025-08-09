import ProjectSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

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

  function handleSelectProject(id) {
      setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: id,
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === project.selectedProjectId);

  let content = <SelectedProject project={selectedProject} />

  if (projectsState.selectedProject === null) {
    content = <NewProject onSave={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
