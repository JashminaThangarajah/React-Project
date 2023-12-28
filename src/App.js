import React from 'react';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >
    <Navbar/>
      <Route path="/">
      <Home/>
      </Route>

      <Route path="/about">
      <Aboutus/>
      </Route>

      <Route path="/contact">
      <Contact/>
      </Route>   
       
    </div>
    </Router>
    
    
  );
}

export default App;


// import React from 'react';
// import Home from './components/pages/Home';
// import Aboutus from './components/pages/Aboutus';
// import Contact from './components/pages/Contact';
// import Navbar from './components/inc/Navbar';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//     <div >
//     <Navbar/>
//     <Switch>
//       <Route exact path="/">
//       <Home/>
//       </Route>

//       <Route path="/about">
//       <Aboutus/>
//       </Route>

//       <Route path="/contact">
//       <Contact/>
//       </Route>   
//       </Switch>

//     </div>
//     </Router>
    
    
//   );
// }

// export default App;
