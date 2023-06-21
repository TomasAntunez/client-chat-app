import { AppRouter } from "./Router";
import { ThemeConfig } from "./config";
import { AuthProvider } from './auth';
import { AlertProvider, SocketProvider } from './context';


function App() {
  return (
    <ThemeConfig>
      <AuthProvider>
        <SocketProvider>
          <AlertProvider>
            <AppRouter />
          </AlertProvider>
        </SocketProvider>
      </AuthProvider>
    </ThemeConfig>
  );
}

export default App;
