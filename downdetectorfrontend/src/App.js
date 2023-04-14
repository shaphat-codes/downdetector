import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom' 

import HomePage from './pages/HomePage';






function App() {
  return (
    
    <Router>
      

        <Route component={HomePage} path="/"exact />
        


       


    </Router>
   
  );
}

export default App;
