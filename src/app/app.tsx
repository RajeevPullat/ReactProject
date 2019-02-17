import * as React from "react";
import * as ReactDOM from "react-dom";
const yomanimg= require("../public/img/yeoman-003.png");

export default class App extends React.Component{
    render(){
        return(
            <div className="appContainer">
                <h1>Hello React..!</h1>
                <img src={yomanimg} alt="logo"></img>
            </div>
        );
    }
}


ReactDOM.render(<App/>,document.getElementById("root"));