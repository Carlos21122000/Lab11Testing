
/**
/*Patel, N. (2018, July 2). How To Build A Simple Calculator Application With React.JS. Medium. https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd
/*Georgi Georgiev (29 enero) Howt to create a simple calculator web app using react.js  https://dev.to/gjorgiev/how-to-create-a-simple-calculator-web-app-using-react-js-4gc3
/ Bryce Ayres. (agosto 2018) react-calculator-app
*/
import React from "react";
import "./ClearButton.css";

class ClearButton extends React.Component {
    render() {
        return (
            <div className="ClearButton" onClick={this.props.handleClear}>
                {this.props.children}
            </div>
        );
    }
};
export default ClearButton;