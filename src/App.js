import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.page';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
