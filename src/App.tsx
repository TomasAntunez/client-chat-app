import { AppRouter } from "./routes";
import { ThemeConfig } from "./config";


function App() {
  return (
    <ThemeConfig>
      <AppRouter />
    </ThemeConfig>
  );
}

export default App;
