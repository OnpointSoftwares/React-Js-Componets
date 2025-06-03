import logo from './logo.svg';
import './App.css';
import IconButton from './components/buttons/icon-button';
import LoginIcon from '@mui/icons-material/Login';
import SignupIcon from '@mui/icons-material/PersonAdd';
import RaisedButton from './components/buttons/raised-button';
import ElevatedButton from './components/buttons/borderless-button';
import TransparentNav from './components/navigationBars/transparent-nav';
function App() {
  return (
    <div className="App" style={{background: '#fff'}}>
      <header className="App-header">
        <TransparentNav/>
      <IconButton name="Signup" icon={<SignupIcon/>} background="#ff5733" color="#fff"/>
      <IconButton name="Login" icon={<LoginIcon/>} background="#ff5733" color="#fff"/>
      <RaisedButton name="Signup" icon={<SignupIcon/>} background="transparent" color="#fff"/>
      <ElevatedButton name="Login" icon={<LoginIcon/>} background="transparent" color="#fff"/>
      </header>
    </div>
  );
}

export default App;
