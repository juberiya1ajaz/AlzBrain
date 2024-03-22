import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
// import GlobalStyles from './globalStyles'
import { Navbar,} from './components';
import Home from './pages/Home.jsx';
import SignUp from "./components/Sign/SignUp.jsx"
import Login from "./components/Sign/Login.jsx"
import ScrollToTop from './components/ScrollToTop';
import Features from "./components/Features/Features.jsx";
import { Testimonials } from './components/Testimonials/Testimonials.jsx';
// import { Features } from './components/Features/Features.jsx';
import { Roadmap } from './components/Roadmap/Roadmap.jsx';
import { Gallery } from './components/Gallery/Gallery.jsx';
import { Team } from './components/Team/Team.jsx';

function App() {
  return (
    
      <Router>
          {/* <GlobalStyles /> */}
          <ScrollToTop />
          <Navbar />
          {/* <Features />
          <Roadmap /> */}
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/features' component={Features} />
            <Route path='/about'  component={Roadmap} />
            <Route path='/portfolio'  component={Gallery} />
            <Route path='/testimonials'  component={Testimonials} />
            <Route path='/team' component={Team} />
            <Route path='/sign-up' component={SignUp} />
            
            <Route path='/sign-in' component={Login} />
          </Switch>
      </Router>
        
    
  );
}

export default App;
