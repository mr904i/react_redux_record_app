import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class GraphCalendar extends Component {
  state = {
    date: this.props.date,
  }
 
//   onChange = date_of_birth => this.setState({ date_of_birth })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.props.onSelectDate}
          value={this.state.date}
        />
      </div>
    );
  }
}
export default GraphCalendar;