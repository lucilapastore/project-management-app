import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { ProjectsSideBar } from "./components/ProjectsSideBar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {" "}
      <ProjectsSideBar onStartAddProject={handleStartAddProject} />
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    </main>
  );
}

export default App;
