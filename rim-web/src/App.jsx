import MainWindow from "./components/Main/MainWindow";
import Session from "./components/Session/Session";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div id="app" className="p-2 w-screen h-screen flex bg-slate-200">
      <div id="sidebar-container" className="w-64">
        <Sidebar />
      </div>
      <div id="session-container" className="w-96">
        <Session />
      </div>
      <div id="main-window-container" className="h-full w-full ml-2">
        <MainWindow />
      </div>
    </div>
  );
}

export default App;
