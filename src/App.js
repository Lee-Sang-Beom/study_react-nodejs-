import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import Welcome from './component/Welcome';
import styles from "./App.module.css";
function App() {
  const name = "hello";
  const naver = {name : "hello", url : "http://naver.com"}
  return (
    <div className="App">
      <Hello />
      <div className = {styles.box}>appname</div>
    </div>
  );
}

export default App;
