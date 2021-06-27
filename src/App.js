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
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Login from './components/Login/Login/Login'
export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})

  return (
    <div className="App">

    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
        <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/createPost">
          <CreatePost></CreatePost>
        </Route>
        <Route path="/singleBlog/:id">
          <SingleBlog></SingleBlog>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
      
    </div>
  );
}

export default App;
