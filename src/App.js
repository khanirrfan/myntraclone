import Home from "./Component/Home/Home"
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./Component/Layout/Navigation/Header/Header";
import Routing from './Component/Route/Routing';
import { BrowserRouter as Router } from 'react-router-dom';
import PageDetails from "./Component/PageDetails/PageDetails";
function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
        <Route exact path ="/">
        <Home />
        </Route>
        <Route exact path="/details"  >
          <PageDetails />
        </Route>
        <Route component = {Routing} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
