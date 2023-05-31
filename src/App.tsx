import { AppRouter } from "./router/AppRouter";
import { ThemeConfig } from "./config/Theme";


function App() {
  return (
    <>
      <ThemeConfig>
        <AppRouter />
      </ThemeConfig>
    </>
  );
}

export default App;
