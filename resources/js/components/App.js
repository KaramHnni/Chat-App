import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor(props){

        super(props);
        this.state = {
            isLoggedIn : false,
            user : {},
        };
    }
    render() {
        
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
