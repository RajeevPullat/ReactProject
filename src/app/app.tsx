import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component{
    render(){
        return(
            <h1>Hello React..!</h1>
        );
    }
}


ReactDOM.render(<App/>,document.getElementById("root"));