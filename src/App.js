import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { MainLayout } from './component/MainLayout';
import { LoginPage } from './component/LoginPage'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/' component={MainLayout}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
