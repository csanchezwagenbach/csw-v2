import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'react-bootstrap';
import NavigationHeader from './components/Header';

function App() {
  return (
    <ThemeProvider
      breakpoints={['l', 'm', 's']}
    >
      <div>
        <NavigationHeader />
      </div>
    </ThemeProvider>
  );
}

export default App;
