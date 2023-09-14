import React, { Component,useEffect,useState } from 'react';
//import {Slide} from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'

export class Home extends Component {
  static displayName = Home.name;
  
  state = {
    time: {
      CurrentTime: 1
    },
    date:{
      curretDate: ""
    }
  }

  constructor() {
    super();
    this.getCurrentTime();
  }

  //Gets time and date from Api
  getCurrentTime =()=>{

    fetch('/Api/time').then(res=>res.json()).then(data =>{
      this.setState({
        time: {
          CurrentTime: data.time
        }
      });
    },[]);

    fetch('/Api/date').then(res=>res.json()).then(data =>{
      this.setState({
        date: {
          curretDate: data.date
        }
      });
    },[]);
       
  }


  render() {
    
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://flask.palletsprojects.com/en/2.3.x/'>Flask </a> and <a href='https://www.python.org/'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have to jump up and down:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a <var>standard</var> React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        <p>The Current Time in Seconds {this.state.time.CurrentTime.toLocaleString()}.</p>
        <p>the Current Date is {this.state.date.curretDate.toLocaleString()}</p>
        <button onClick={this.getCurrentTime}>Time</button>
      </div>
    );
  }
}
