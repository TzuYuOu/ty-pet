import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PublicAdopt from './components/PublicAdopt';
import NormalAdopt from './components/NormalAdopt';
import MissingPet from './components/MissingPet';
import Login from './components/Login';
import Profile from './components/member/Profile';
import List from './components/member/List'
import Lost from './components/member/Lost'
import PostAdopt from './components/member/PostAdopt';
import PostLost from './components/member/PostLost';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav/>
      <Router>
        <Switch>
          <Route
            path='/login'
            component={Login}
          />
          <Route
            path='/member/profile'
            component={Profile}
          />
          <Route
            path='/member/list'
            component={List}
          />
          <Route
            path='/member/lost'
            component={Lost}
          />
          <Route
            path="/public-adopt"
            component={PublicAdopt}
          />
          <Route 
            path="/normal-adopt"
            component={NormalAdopt}
          />
          <Route
            path="/find-missing-pets"
            component={MissingPet}
          />
          <Route 
            path='/member/post/adopt'
            component={PostAdopt}
          />
          <Route 
            path='/member/post/lost'
            component={PostLost}
          />

          
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
