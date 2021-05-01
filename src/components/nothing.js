import React, { Component } from "react";

class Nothing extends Component {
  state = {
    person: [
      { name: "Narayan", age: 22 },
      { name: "Bavisetti", age: 51 },
      { name: "Paryank", age: 19 },
    ],
  };
  changeName = () => {
    this.setState({
      person: [
        { name: "baban", age: 22 },
        { name: "Bavisetti", age: 100 },
        { name: "Paryank", age: 19 },
      ],
    });
  };
  render() {
    return (
      <div>
        {this.state.person.map((item, i) => {
          return (
            <div>
              My name is {item.name}{i} and my age is{item.age}
            </div>
          );
        })}
        {/* <div>
My name is {this.state.person[0].name} and my age is{this.state.person[0].age}
</div>
<div>
My name is {this.state.person[1].name} and my age is{this.state.person[1].age}
</div>
<div>
My name is {this.state.person[2].name} and my age is{this.state.person[2].age}
</div> */}
        <button type="submit" onClick={this.changeName}>
          Change Name
        </button>
      </div>
    );
  }
}

export default Nothing;
