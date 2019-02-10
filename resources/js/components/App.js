import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Login from "./Login";
import Register from './Register'

export default class App extends Component {

    constructor(props){

        super(props);
        this.state = {
            isLoggedIn : false,
            user : {},
        };
    }

     userlogin (email,password){

        var formData = new FormData();
        formData.append("email" , email);
        formData.append("password" , password);
    
        axios
            .post("chat.test/api/user/login/" ,formData )
            .then(response =>{ 
                console.log(response);
                return response;
            })
            .then(json => {
                if(json.data.success){
                    alert("login successfull");
    
                    let userData = {
                        name: json.data.data.name,
                        id: json.data.data.id,
                        email: json.data.data.email,
                        auth_token: json.data.data.auth_token,
                        timestamp: new Date().toString(),
                    };
    
                    let appState = {
                            isLoggedIn: true,
                            user: userData
                          };
                          
                          localStorage["appState"] = JSON.stringify(appState);
                          this.setState({
                            isLoggedIn: appState.isLoggedIn,
                            user: appState.user
                          });
                } 
                else alert("Login Failed!");
            })
    }
    

    userregister(name, email, password) {
        
        var formData = new FormData(); 
        formData.append("password", password);
        formData.append("email", email);
        formData.append("name", name);
    
        axios
          .post("http://localhost:8000/api/user/register", formData)
          .then(response => {
            console.log(response);
            return response;
          })
          .then(json => {
            if (json.data.success) {
              alert(`Registration Successful!`);
    
              let userData = {
                name: json.data.data.name,
                id: json.data.data.id,
                email: json.data.data.email,
                auth_token: json.data.data.auth_token,
                timestamp: new Date().toString()
              };
              let appState = {
                isLoggedIn: true,
                user: userData
              };
              // save app state with user date in local storage
              localStorage["appState"] = JSON.stringify(appState);
              this.setState({
                isLoggedIn: appState.isLoggedIn,
                user: appState.user
              });
            } else {
              alert(`Registration Failed!`);
            }
    })
}


    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
          let AppState = JSON.parse(state);
          console.log(AppState);
          this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
      }
      

    render() {
        
        return(
            <Switch data="data">
            <div id="main">

                <Route 
                    path="/login"
                    render= {props => <Login {...props}  userlogin ={this.userlogin} />}
                />
                <Route
                    path="/register"
                    render={props =>  <Register {...props} userregister={this.userregister} />}
          />
            </div>
                

            </Switch>
        );
    }
}


const AppContainer = withRouter( props => <App {...props} />);
render (

  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
  ,

  document.getElementById( "root")
);

