import MainWindow from "./components/Main/MainWindow";
import Session from "./components/Session/Session";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div
      id="app"
      className="p-2 w-screen h-screen flex bg-slate-200 border-4 border-pink-800"
    >
      <Sidebar />
      <Session />
      <MainWindow />
    </div>
  );
}

export default App;
