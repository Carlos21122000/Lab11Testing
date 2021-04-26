/**
/*Patel, N. (2018, July 2). How To Build A Simple Calculator Application With React.JS. Medium. https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd
/*Georgi Georgiev (29 enero) Howt to create a simple calculator web app using react.js  https://dev.to/gjorgiev/how-to-create-a-simple-calculator-web-app-using-react-js-4gc3
*/


import React, {Component} from "react";
import Button from './Elements/Button';
import Input from './Elements/Input';
import ClearButton from './Elements/ClearButton';
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: "",
        SimboloMat:"",
        PrimerIngreso: "",
        SegundoIngreso:"",
        Donee: false,
    };
  }
  render() {
    const { input, Donee } = this.state;

    function LenghtLimitY() {
     
      return <Input input={input.substring(0, 9)} />;
    }

    function LenghtLimitN() {
      return <Input input={input} />;
    }

    function FinalMessage() {
      if (Donee === true) {
        return <LenghtLimitY />;
      }
      return <LenghtLimitN />;
    }
    return (
      <div className="titulo"> Calculadora
        <div className="app">
          <div className="container">
            <FinalMessage/>
              <div className="row1">
                <ClearButton test="clear" handleClear={() => this.setState({ input: "",PrimerIngreso:"",SegundoIngreso:"",SimboloMat:"",result:"" })}>
                  AC
                </ClearButton>
                <Button test="signo" ingresar={()=>this.setState({input:math.evaluate("-1 * " + this.state.input).toString().substring(0,8)})}>
                  +/-
                </Button>
                <Button test="mod" ingresar={()=>this.setState({SimboloMat: "%",PrimerIngreso:this.state.input /100})}>
                  %
                </Button>
                <Button test="div" ingresar={()=>this.setState({SimboloMat: "/",PrimerIngreso:this.state.input,input: "", Donee:false})}>
                  /
                </Button>
              </div>
               <div className="row2">
                  <Button test="7" ingresar={()=>this.setState({input: this.state.input + 7, Donee:false})}>
                    7
                  </Button>
                  <Button test="8"ingresar={()=>this.setState({input: this.state.input + 8, Donee:false})}>
                    8
                  </Button>
                  <Button test="9"ingresar={()=>this.setState({input: this.state.input + 9, Donee:false})}>
                    9
                  </Button>
                  <Button test="*"ingresar={()=>this.setState({SimboloMat: "*",PrimerIngreso:this.state.input,input: "", Donee:false})}>
                    x
                  </Button>
                </div>
                <div className="row3">
                  <Button test="4" ingresar={()=>this.setState({input: this.state.input + 4, Donee:false})}>
                    4
                  </Button>
                  <Button test="5" ingresar={()=>this.setState({input: this.state.input + 5, Donee:false})}>
                    5
                  </Button>
                  <Button test="6" ingresar={()=>this.setState({input: this.state.input + 6, Donee:false})}>
                    6
                  </Button>
                  <Button test="menos" ingresar={()=>this.setState({SimboloMat: "-",PrimerIngreso:this.state.input,input: "",Donee:false})}>
                    -
                  </Button>
                </div>
                <div className="row4">
                  <Button test="1" ingresar={()=>this.setState({input: this.state.input + 1, Donee:false})}>
                    1
                  </Button>
                  <Button test="2" ingresar={()=>this.setState({input: this.state.input + 2, Donee:false})}>
                    2
                  </Button>
                  <Button test="3" ingresar={()=>this.setState({input: this.state.input + 3, Donee:false})}>
                    3
                  </Button>
                  <Button test="mas" ingresar={()=>this.setState({SimboloMat: "+",PrimerIngreso:this.state.input,input: "", Donee:false})}>
                    +
                  </Button>
                </div>
                <div className="row5">
                  <Button test="punto" ingresar={()=>this.setState({input: this.state.input + '.', Donee:false})}>
                    .
                  </Button>
                  <Button test="0" ingresar={()=>this.setState({input: this.state.input + 0, Donee:false})}>
                    0
                  </Button>
                  <Button test="igual" ingresar={()=>this.setState({
                    input: math.evaluate(this.state.PrimerIngreso+this.state.SimboloMat+this.state.input).toString().substring(0,9),Donee: true,})}>
                    =
                  </Button>            
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;