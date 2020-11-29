import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Customers from "./components/Customers/Customers";
import Businesses from "./components/Businesses/Businesses";
import Login from "./components/Login/Login";
import Homebusiness from "./components/Businesses/Home/Homebusiness";
import { BusinessesProvider } from "./context/Businesses.context";
import Loglist from "./components/Businesses/Loglist/Loglist";
import Datelogs from "./components/Businesses/Datelogs/Datelogs";
import Home from "./components/Home/Home";
import Customerlist from "./components/Businesses/Customerlist/Customerlist";

function App() {
  return (
    <BusinessesProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/customers" component={Customers} />
            <Route path="/businesses" component={Businesses} />
            <Route path="/login" component={Login} />
            <Route path="/business" component={Homebusiness} />
            <Route path="/customerslist" component={Customerlist} />
            <Route path="/loglist" component={Loglist} />
            <Route path="/datelogs" component={Datelogs} />
          </Switch>
        </Router>
      </div>
    </BusinessesProvider>
  );
}

export default App;
