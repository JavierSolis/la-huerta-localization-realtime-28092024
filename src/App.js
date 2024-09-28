import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                {Date().toLocaleString()}

                <span>key-pair/rsync : 528ms - medio </span>
                <span>OpenSSH/rsync : 450ms - medio</span>
                <span>Pass/rsync : 420ms - medio</span>
                <span>key-pair/no-rsync : 30ms- rapido</span>
                <span>OpenSSH/no-rsync : 25ms - rapido+</span>
                <span>Pass/no-rsync : 30ms - rapido-</span>
9898
            </header>
        </div>
    );
}

export default App;
