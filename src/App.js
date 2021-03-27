import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import EvenVowelPage from "./routes/EvenVowelPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EvenVowelPage}/>
      </Switch>
    </Router>
  );
}

export default App;
