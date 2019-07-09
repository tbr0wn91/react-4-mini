import React from 'react';
import './App.css';
import Home from "./components/Home";
import StudentPage from "./components/StudentPage";
import { Route, Switch, } from "react-router-dom";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Header from "./components/Header";
class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        myData: "Hello There"
      }
    
  }
   render (){
    return (
      <div className="App">
       <Header />
        
        <Switch>
       < Route exact path="/" component={Home} />
       <Route path="/student_page/:id" component={Profile} />

       < Route path="/student_page" component={StudentPage} />
       < Route path="/contact" component={Contact} />
       <Route 
          path="/my_other_path"
          render={() => {
            return( 
              <div>
                
                <Home myData={this.state.myData} />
              </div>
            );
       }}
       />
       </Switch>
       
       
      </div>
    );





 
  }

}

export default App;
