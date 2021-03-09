import './App.css';
import Header from './components/Header';
import GameList from './components/GameList';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path='/games' component={GameList}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={GameList}/>
      </div>
    </Router>
  );
}

export default App;
