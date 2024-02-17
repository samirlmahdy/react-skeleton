import { useContext } from "react";
import Articles from "./components/Articles";
import User from "./components/User";
import { ThemeContext } from "./context/theme-context";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      <header>
        <h1>React Skeleton</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Theme: {theme}
        </button>
      </header>
      <div className="content">
        <Articles theme={theme} />
        <User theme={theme} />
      </div>
    </div>
  );
}

export default App;
