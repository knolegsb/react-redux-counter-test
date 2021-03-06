import React from 'react';

class StateExample extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            header: "Header Initial State",
            content: "Content Initial State"
        };
    }

    _updateHeader(text){
        this.setState({
            header: "Header has changed"
        });
    }

    _updateContent(text){
        this.setState({
            content: "Content has changed"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this._updateHeader.bind(this)}>Update Header</button>
                <button onClick={this._updateContent.bind(this)}>Update Content</button>
            </div>
        );
    }
}

export default StateExaple;