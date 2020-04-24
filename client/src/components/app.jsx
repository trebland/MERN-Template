import React, { Component } from 'react';
import API from '../utils/API';

class App extends Component {
    // If you are passing props:
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         user: null,
    //     };

    // }
    state = {
        user: null,
    };


    componentDidMount() {
        this.loadAnon();
    }

    loadAnon = () => {
		API.getAnon()
			.then(res => this.setState({ user: res.data }))
			.catch(err => console.log(err));
	};

    render() {
        return (
        <div className="App">
            <h1>Users</h1>
            {this.state.user == null ? <div>Please Wait...</div> : <div>{this.state.user.name}</div>}
        </div>
        );
    }
}

export default App;