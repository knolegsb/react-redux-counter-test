import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


/*
 * Action
 */
const INCREMENT = "INCREMENT";
const SET_DIFF = "SET_DIFF";

function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}

function setDiff(value){
    return{
        type: SET_DIFF,
        diff: value
    }
}


/* 
 * Reducer
 */
const initialState = {
    value: 0,
    diff: 1
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            })
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
        this.onClick = this.onClick.bind(this);
        this.onChangeDiff = this.onChangeDiff.bind(this);
    }
   
    render() {
        
        let centerStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect:'none',
            userSelect: 'none',
            cursor: 'pointer'
        };

        return (
            <div style={ centerStyle }>
                <button onClick={ this.onClick }>Add</button>
                <input type="text" value={this.state.diff} onChange={this.onChangeDiff} />            
                <h1> {this.props.store.getState().value} </h1>
            </div>
        )
    }

    onClick() {
        this.props.store.dispatch(increase(1));
    }

    onChangeDiff(e) {
        if(isNaN(e.target.value))
            return;
        
        this.setState({diff: e.target.value})

        if(e.target.value == ''){
            this.setState({diff: '0'})
        }
        this.props.onUpdateDiff(parseInt(e.target.value));
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    }
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
