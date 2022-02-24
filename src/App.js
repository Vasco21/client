import './App.css';
import { Footer,  Blog, Possibility, Features, Header , AboutCompany} from './containers'
import { Article, Feature , Navbars} from './components'

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
      <Possibility/>
      <Feature/>
      <Blog/>
      <Footer/> 
    </div>
  );
} 

export default App;
