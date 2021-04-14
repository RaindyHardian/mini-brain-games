import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import EvenVowelPage from "./routes/EvenVowelPage";
import SpeedMatchPage from "./routes/SpeedMatchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EvenVowelPage}/>
        <Route exact path="/speedmatch" component={SpeedMatchPage}/>
      </Switch>
    </Router>
  );
}

export default App;
