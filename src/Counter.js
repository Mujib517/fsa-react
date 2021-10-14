import React, { Component } from 'react';

// events
// life cycle events
// mounting, unmounting
// pub-sub
export default class Counter extends Component {

    state = { count: 0 };

    componentDidMount() {
        let cnt = this.state.count;
        this.timer = setInterval(() => {
            console.log("updating...");
            this.setState({ count: ++cnt });
        }, 1000);
    }

    componentDidUpdate() {
        console.log("updated");
    }

    render() {
        return <h1>Count: {this.state.count}</h1>
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Unmounting...");
    }
}
