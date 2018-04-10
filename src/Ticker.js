import React, { Component } from 'react';

// on enter pushes new item with 0 height
// on leave makes index 0 to height 0 and index 5 to height 100%
// after finishing, the first item will be cut
// and we are in a fine state
// but the state is made in the parent component
// so we need a handler here where we cann pass a callback to


export default class Ticker extends Component {

  render() {
    console.log(this.props.events);
    return (
      <ul className="eventTracker">
        {this.props.events.map(data => {
          return (
            <li key={`marker-${1 * Math.random()}`} className="eventTrackerBox" style={{ backgroundColor: data.color }}>
              <div className="eventTrackerItem">{JSON.stringify(data)}</div>
            </li>
          )
        })}
      </ul>
    )
  }
}