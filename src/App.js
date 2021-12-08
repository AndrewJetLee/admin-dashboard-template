import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar"
import Home from "./pages/home/Home";
import './app.scss';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="content">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
