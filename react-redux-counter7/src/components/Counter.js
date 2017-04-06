import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    
    render() {
        let {val} = this.props.value;
        
        return (
            <h1>
            { val.map((v) => {
                return <div><h1>{v}</h1></div>})}
            
            </h1>  
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value + 1
    };
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;
