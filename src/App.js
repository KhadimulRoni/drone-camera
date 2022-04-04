import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Home/Shared/Header/Header';

function App() {
   return (
      <div className="App">
         <Router>
            <Header></Header>
            <Switch>
               <Route exact path="/home">
                  <Home></Home>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
