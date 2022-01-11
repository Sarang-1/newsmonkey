import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=9;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News category='General' key='general' color='danger' pageSize={this.pageSize} />}></Route>
            <Route exact path='/business' element={<News category='Business' color='warning' key='business' pageSize={this.pageSize} />}></Route>
            <Route exact path='/entertainment' element={<News category='Entertainment' color='danger' key='entertainment' pageSize={this.pageSize} />}></Route>
            <Route exact path='/health' element={<News category='Health' color='success' key='health' pageSize={this.pageSize} />}></Route>
            <Route exact path='/science' element={<News category='Science' key='science' color='warning' pageSize={this.pageSize} />}></Route>
            <Route exact path='/sports' element={<News category='Sports' key='sports' color='info' pageSize={this.pageSize} />}></Route>
            <Route exact path='/technology' element={<News category='Technology' color='secondary' key='technology' pageSize={this.pageSize} />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
