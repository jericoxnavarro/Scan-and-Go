import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Customers from "./components/Customers/Customers";
import Businesses from "./components/Businesses/Businesses";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/businesses" component={Businesses} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
