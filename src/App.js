import './styles/App.css';
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Initiatives from './screens/Initiatives';
import Sponsor from './screens/Sponsor';
import SponsorUs from './components/Sponsor/SponsorUs';

function App() {

  const hackMelbourne = 'Hack{Melbourne'

  return (
    <div className="App">
      <Router>
        {/* <Navbar style = {navBar}/> */}
        <Switch className="Switch">
          <Navbar style = {navBar}/>
          <Route exact path="/" component={Home}/>
          <Route path="/initiatives" component={Initiatives}/>
          <Route path="/sponsors" component={Sponsor}/>
          <Route path="/sponsor_us" component={SponsorUs}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

const navBar = {
  paddingBottom: "28vh"
}

export default App;