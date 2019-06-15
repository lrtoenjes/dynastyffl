import React, { Component } from 'react';
import Blog from './Blog';
import Code from './LeagueCode.md';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          mdText: "",
          posts: [Code]
        }
    }; 

    componentWillMount () {
        fetch(this.state.posts[0]).then((response) => response.text()).then((text) => {
            this.setState({mdText: text});            
        });
    }

    render() {                

        return (
            <Blog mdText={this.state.mdText} />            
        );
    }
}

export default App;