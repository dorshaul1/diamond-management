import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import './style/App.scss';
import { HomePage } from './views/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
      <AppHeader />
        <Switch>
          <Route component={HomePage} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
