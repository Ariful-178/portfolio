
import './App.css';
import {

  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Contacts from './Components/Contacts/Contacts';
import Music from './Components/Music/Music';
import Academic from './Components/Academic/Academic';
import Projects from './Components/Projects/Projects';
import LinkProfile from './Components/LinkProfile/LinkProfile';
import Skils from './Components/Skils/Skils';
import Experience from './Components/Experience/Experience';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import TrainingCertifications from './Components/TrainingCertifications/TrainingCertifications';
import Cv from './Components/Cv/Cv';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Music></Music>
      
        
      <div>
      

        <Switch>
        

          
          
        <Route exact path="/">
          
            <Home />
            
            
          </Route>
        <Route path="/home">
            <Home></Home>
            
            
          </Route>
         
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route> 
          <Route path="/trainingsCertifications">
            <TrainingCertifications></TrainingCertifications>
          </Route>
          
          <Route path="/cv">
            <Cv></Cv>
          </Route>

          <Route path="/academic">
            <Academic></Academic>
          </Route>


          <Route path="/projects">
            <Projects></Projects>
          </Route>


          <Route path="/linkProfile">
            <LinkProfile></LinkProfile>
          </Route>


          <Route path="/skils">
            <Skils></Skils>
          </Route>

          <Route path="/experience">
            <Experience></Experience>
          </Route>


          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          
          
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
