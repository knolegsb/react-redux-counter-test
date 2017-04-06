import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


/*
 * Action
 */
const INCREMENT = "INCREMENT";

function increase() {
    return {
        type: INCREMENT,
        value: [],
        textvalue : ""
    };
}


/* 
 * Reducer
 */
const initialState = {
    value: [],
    textvalue: ""
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value.unshift(state.textvalue)
            });
     
        default:
            return state;
    }
}


/*
 * Store
 */
const store = createStore(counterReducer);

/*
 * App Component
 */
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <div>        
                <button className="addbutton" onClick={this.handleAddTodoItem}>Add</button>
                <input type="text" placeholder="Enter a number here" className="text" onChange={ this.handleChange } />
                {value.map((v) => {
                    return <div><h1>{v}</h1></div>                    
                })}
            </div>
        )
    }

    // onClick() {
    //     this.props.store.dispatch(increase(1));
    // }
}

/*
 * Rendering
 */
const render = () => {
    
    const appElement = document.getElementById('app');
    ReactDOM.render(
        <App store={store}/>,
        appElement
    );
};

store.subscribe(render);
render();
