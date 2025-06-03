import logo from './logo.svg';
import './App.css';
import IconButton from './components/buttons/icon-button';
import LoginIcon from '@mui/icons-material/Login';
import SignupIcon from '@mui/icons-material/PersonAdd';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <IconButton name="Signup" icon={<SignupIcon/>} background="#ff5733" color="#fff"/>
      <IconButton name="Login" icon={<LoginIcon/>} background="#ff5733" color="#fff"/>
      </header>
    </div>
  );
}

export default App;
