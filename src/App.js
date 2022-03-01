import './App.css';
import { Footer,  Blog, Possibility, Feature, Header , AboutCompany} from './containers'
import { Article, Features , Navbars } from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
         <Navbars/>
          <Header/> 
      </div>
      <Article/>
      <AboutCompany/>
      <Features/>
      <Feature/>
      <Possibility/>
      <Blog/>
      <Footer/> 
    </div>
  );
} 

export default App;
