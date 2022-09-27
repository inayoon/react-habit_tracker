import React, { Component } from 'react';

export default class Habit extends Component {
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
          <i className="fa-solid fa-calendar-plus"></i>
        </button>
        <button className="habit-button habit-decrease">
          <i className="fa-solid fa-calendar-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-calendar-xmark"></i>
        </button>
      </li>
    );  
  }
}
