import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevSate) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevSate,
        projects: [...prevSate.projects, newProject],
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
