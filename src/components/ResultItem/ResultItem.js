import React from "react";
import "./ResultItem.css";

const ResultItem = props => {
  return (
    <div className="result-item-block">
      <span>{props.question}</span>
      <span>{props.actualAnswer}</span>
      <span>{props.answer}</span>
      <span>{props.emo}</span> 
    </div>
  )
}
export default ResultItem;