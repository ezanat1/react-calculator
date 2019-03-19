import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import axios from "axios";
import math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  handleEqual = () => {
    // this.setState({ input: math.eval(this.state.input) });
    const num = [this.state.input];
    axios.post("http://localhost:5000/path", num).then(res => {
      this.setState({
        input: res.data
      });
      console.log("Response:", res.data);
    });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />{" "}
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>{" "}
            <Button handleClick={this.addToInput}>8</Button>{" "}
            <Button handleClick={this.addToInput}>9</Button>{" "}
            <Button handleClick={this.addToInput}>/</Button>
          </div>{" "}
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>{" "}
            <Button handleClick={this.addToInput}>5</Button>{" "}
            <Button handleClick={this.addToInput}>6</Button>{" "}
            <Button handleClick={this.addToInput}>-</Button>{" "}
          </div>{" "}
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>{" "}
            <Button handleClick={this.addToInput}>2</Button>{" "}
            <Button handleClick={this.addToInput}>3</Button>{" "}
            <Button handleClick={this.addToInput}>+</Button>{" "}
          </div>{" "}
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>{" "}
            <Button handleClick={this.addToInput}>.</Button>{" "}
            <Button handleClick={this.addToInput}>*</Button>{" "}
            <Button handleClick={() => this.handleEqual()}> = </Button>{" "}
          </div>{" "}
          <div className="row">
            <ClearButton
              handleClear={() =>
                this.setState({
                  input: ""
                })
              }
            >
              CE{" "}
            </ClearButton>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
