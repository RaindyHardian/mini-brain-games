import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import EvenVowelPage from "./routes/EvenVowelPage";
import SpeedMatchPage from "./routes/SpeedMatchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/even-vowel" component={EvenVowelPage} />
        <Route exact path="/speed-match" component={SpeedMatchPage} />
      </Switch>
    </Router>
  );
}

export default App;
