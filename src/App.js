import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  pageSize = 9;

  state = {
    progress: 0
  }
  apiKey = process.env.REACT_APP_NEWS_API

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} category='General' key='general' color='danger' pageSize={this.pageSize} />}></Route>
            <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} category='Business' color='warning' key='business' pageSize={this.pageSize} />}></Route>
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} category='Entertainment' color='danger' key='entertainment' pageSize={this.pageSize} />}></Route>
            <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} category='Health' color='success' key='health' pageSize={this.pageSize} />}></Route>
            <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} category='Science' key='science' color='warning' pageSize={this.pageSize} />}></Route>
            <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} category='Sports' key='sports' color='info' pageSize={this.pageSize} />}></Route>
            <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} category='Technology' color='secondary' key='technology' pageSize={this.pageSize} />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
