import { AppRouter } from "./Router";
import { ThemeConfig } from "./config";
import { AuthProvider } from './auth';
import { AlertProvider } from './context';


function App() {
  return (
    <ThemeConfig>
      <AuthProvider>
        <AlertProvider>
          <AppRouter />
        </AlertProvider>
      </AuthProvider>
    </ThemeConfig>
  );
}

export default App;
