import "./App.css";
import {
  Footer,
  Possibility,
  Feature,
  Header,
  Contact,
} from "./containers";
import { Article, Resource  } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Navbars/index'
import AboutCompany from "./containers/AboutCompany/AboutCompany";
import Blog from './containers/Blog/blog';
import Features from './components/Features/Features'
import Become from './components/Become/index';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Router>
          <Switch>
          </Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Header}/>
          {/* <Route path="/" exact component={Become}/> */}
          {/* <Route path="/" exact component={}/> */}
          <Route path="/aboutCompany" exact component={AboutCompany}/>
          <Route path="/possibility" exact component={Possibility}/>
          <Route path="/blogs" exact component={Blog}/>
          {/* <Route path="/features" exact component={Features}/> */}
          <Route path="/contact" exact component={Contact}/>
        </Router>
      </div>
      <Features/>
      <Article/>
      <Feature/>
      <Footer />
    </div>
  );
}

export default App;
