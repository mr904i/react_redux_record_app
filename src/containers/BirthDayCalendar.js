import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class BirthDayCalendar extends Component {
  state = {
    date_of_birth: this.props.date_of_birth,
  }
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.props.selectDateOfBirth}
          value={this.state.date_of_birth}
        />
      </div>
    );
  }
}
export default BirthDayCalendar