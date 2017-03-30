import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumbers';

class App extends React.Component{

    constuctor (props){
        super(props);

        this.state = {
            value: Math.round(Math.random() * 100)
        };

        this._updateValue = this._updateValue.bind(this);
    }
    
    render(){
        return (
            <div>
                <Header title={this.props.headerTitle}/>

                <Content title={this.props.contentTitle} body={this.props.contentBody}/>
            </div>            
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 5,
    contentBody: undefined
};

export default App;