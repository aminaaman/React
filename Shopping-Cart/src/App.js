import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Home from './components/Home';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Logout from './components/Logout';
import Admin from './components/Admin';



class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/admin" component={Admin}/>

                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
