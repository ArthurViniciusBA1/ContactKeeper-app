import RoutesMain from "./routes";
import GlobalStyles from "./styles/global-styles";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
