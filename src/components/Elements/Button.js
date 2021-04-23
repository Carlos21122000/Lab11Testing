/**
/*Patel, N. (2018, July 2). How To Build A Simple Calculator Application With React.JS. Medium. https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd
/*Georgi Georgiev (29 enero) Howt to create a simple calculator web app using react.js  https://dev.to/gjorgiev/how-to-create-a-simple-calculator-web-app-using-react-js-4gc3
/ Bryce Ayres. (agosto 2018) react-calculator-app
*/
import React from "react";
import "./Button.css";

const isOperator = (val) => !isNaN(val) || val === "." || val === "=";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
      }
    
    render() {
        return (

            <div role="presentation" className={`button ${isOperator(this.props.children) ? null : "opt"}`} onClick={this.props.ingresar}
                onClick={this.props.ingresar}
            >
                {this.props.children}
            </div>
        );
    }
};
export default Button;