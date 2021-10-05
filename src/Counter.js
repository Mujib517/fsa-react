import React, { Component } from 'react';

// events
export default class Counter extends Component {
    state = { count: 0 };

    // constructor() {
    //     super();
    //     // fixing this context
    //     // this.onBtnClick = this.onBtnClick.bind(this);
    // }

    // async
    onBtnClick = () => {
        this.setState({ count: ++this.state.count });
        console.log(this.state.count);
    }

    render() {
        return <div>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.onBtnClick}>++</button>
        </div>
    }
}
