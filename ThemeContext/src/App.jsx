import Header from "./Components/Headers";
import Body from "./Components/Body";
import { ThemeProvider } from "./Components/ThemeProvider";
function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Body/>
      </ThemeProvider>
    </>
  );
}

export default App;