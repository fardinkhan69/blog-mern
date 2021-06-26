import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard/Dashboard.js'
import CreatePost from  './components/Dashboard/CreatePost/CreatePost'
import SingleBlog from './components/SingleBlog/SingleBlog';
import Header from './components/Header/Header'
function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
        <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/createPost">
          <CreatePost></CreatePost>
        </Route>
        <Route path="/singleBlog/:id">
          <SingleBlog></SingleBlog>
        </Route>
      </Switch>
    </Router>
    
      
    </div>
  );
}

export default App;
