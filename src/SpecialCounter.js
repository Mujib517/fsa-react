import React from 'react';

export default class SpecialCounter
    extends React.Component {

    state = { count: this.props.count };

    inc = () => {
        let cnt = this.state.count;
        this.setState({ count: ++cnt });
    }

    render() {
        return <div>
            <h1>Count {this.state.count}</h1>
            <button onClick={this.inc}>++</button>
        </div>
    }
}