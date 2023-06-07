import { AppRouter } from "./Router";
import { ThemeConfig } from "./config";

import { AuthProvider } from './auth/context';


function App() {
  return (
    <ThemeConfig>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeConfig>
  );
}

export default App;
