import logo from "./logo.svg";
import "./App.css";
import { NavSearch } from "./components/NavSearch/NavSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavSearch></NavSearch>
      </header>
    </div>
  );
}

export default App;
