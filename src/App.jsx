import NewProject from "./components/NewProject.jsx";
import { ProjectsSideBar } from "./components/ProjectsSideBar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      {" "}
      // to make sure that is shown next to the sidebar
      <ProjectsSideBar />
      <NewProject />
    </main>
  );
}

export default App;
