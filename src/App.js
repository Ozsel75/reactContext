
import './App.css';
import Container from './components/Container';

import ThemeContext from './context/ThemeContext';
import { ThemeProvider} from "./context/ThemeContext";
import { UserProvider} from "./context/UserContext";


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
        <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
