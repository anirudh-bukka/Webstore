import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
          <Route exact path="/webstore" component={Home} />
          <Route exact path="/webstore/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;

// "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-router-dom": "^6.8.0",