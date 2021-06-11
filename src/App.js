import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Hello FuFu Web React <
        /p> <
        a className = "App-link"
        href = "https://www.vpslive.com"
        target = "_blank"
        rel = "noopener noreferrer" >
        Build by VPSLive <
        /a> <
        /header> <
        /div>
    );
}

export default App;