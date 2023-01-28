import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;

// "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-router-dom": "^6.8.0",