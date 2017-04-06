import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>                
                <Option/>
                <Buttons/>
                <Counter/>
            </div>
        );
    }

}

export default App;




