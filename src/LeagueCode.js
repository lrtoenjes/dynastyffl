import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import Code from './LeagueCode.md';

class LeagueCode extends Component {
    constructor(props) {
        super(props);

        this.state = { code: null};
    }

    componentWillMount() {
        fetch(Code).then((response) => response.text()).then((text) => {
            this.setState({code: text});            
        });
    }

    render(){
        return (
            <div className="content">
                <ReactMarkdown source={this.state.code} />
            </div>
        );
    }
}

export default LeagueCode