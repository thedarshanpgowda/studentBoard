import React from "react";
import Chart from "./Chart";
import "./Secondary.css";


export function Message(props) {
  return (
    <Chart className="messageBlock">
        <div className="question">Q: {props.newstate.question}</div>
        <div className="answer">A: {props.newstate.answer}</div>
    </Chart>
  )
}


export default function Secondary(props) {
  return (
    <Chart className="secondaryBlock">
      {props.state.map((newstate, index) => (
        <Message key={index} newstate={newstate} />
      ))}
    </Chart>
  );
}
