import { Component } from "react";

class Event_Handler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkValue: " ",
        count: 0
    }
  }

  //   keyboard click value capture function
  typeListener = (e) => {
    this.setState(
      {
        checkValue: e.target.value,
      },
      () => {
        console.log(this.state.checkValue);
      }
    );
  };

  //   binding
//    Regular Function needs binding

  increase(){
    this.setState({
        count: this.state.count + 1
    })
  }
 

  render() {
    return (
      <div>
        <input type="text" onChange={this.typeListener} />
        <p>{this.state.checkValue}</p>

        {/* Binding */}
        <h4>Count: {this.state.count}</h4>
        <button onClick={this.increase.bind(this)}>Increase</button>
      </div>
    );
  }
}

export default Event_Handler;
