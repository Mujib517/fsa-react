import Callback from "./Callback";
import SpecialCounter from "./SpecialCounter";

function Main() {

    function notify() {
        // fetching data
        console.log("in main component");
    }


    return <Callback onNotify={notify} />
}

export default Main;
