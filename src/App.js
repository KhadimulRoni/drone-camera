import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Home/Shared/Header/Header';
import Drones from './components/Home/Drones/Drones';
import AboutUs from './components/Home/AboutUs/AboutUs';

function App() {
   return (
      <div className="App">
         <Router>
            <Header></Header>
            <Switch>
               <Route exact path="/home">
                  <Home></Home>
               </Route>
               <Route path="/drones">
                  <Drones></Drones>
               </Route>
               <Route path="/about">
                  <AboutUs></AboutUs>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
