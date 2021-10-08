function Callback(props) {

    // arrow function
    // function express
    const onBtnClick = () => {
        console.log("button clicked in Callback component")
        props.onNotify();
    }

    return <button onClick={onBtnClick}>
        Send Notification
    </button>;
}

export default Callback;
