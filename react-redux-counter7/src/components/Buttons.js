import React from 'react';
import { connect } from 'react-redux';
import { increment, setDiff } from '../actions';

class Buttons extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: [],
            initialvalue: '1'
        }

        // this.handleAddTodoItem = this.handleAddTodoItem.bind(this)
        this.handleChange = this.handleChange.bind(this); 
    }

    render() {
        return (
            <div>
                <button type="button" onClick={ this.props.onIncrement }>
                        Add
                </button>
               
                <input type="text" value={ this.state.initialvalue } onChange={this.handleChange}></input>
                
            </div>
            
        );
    }

    handleChange(e) {

        // if(isNaN(e.target.value))
        //     return;

        this.setState({ initialvalue: e.target.value});

        // if(e.target.value=='') {
        //     this.setState({ initialvalue: '0' });
        // } 

        this.props.onUpdateInitialValue(parseInt(e.target.value));
        //console.log(paseInt(e.target.value))
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onUpdateInitialValue: (value) => dispatch(setDiff(value))        
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;




    

