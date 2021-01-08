import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header/>

        <div className="d-flex">
            <Wrapper/>
            <Main/>
        </div>


    </div>
  );
}

export default App;
