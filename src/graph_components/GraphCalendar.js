import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class GraphCalendar extends Component {
  state = {
    date: this.props.date,
  }
 
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