import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar"
import './app.scss';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="content">
        <Sidebar />
        <div className="main">Main</div>
      </div>
    </div>
  );
}

export default App;
