import React, { Component } from 'react'

export default class HabitAddFoam extends Component {
  inputRef = React.createRef();
  onSubmit = event =>{
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value="";
  };
  render() {
    return (
      <form classNAme="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text" 
          className="add-input" 
          placeholder="Enter Your Habit!" 
        />
        <button className="add-button">Add</button>
      </form>
    )
  }
}
