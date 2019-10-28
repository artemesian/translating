import React from "react";
import ResultItem from "../ResultItem/ResultItem.js";
import "./ResultList.css";

const ResultList = props => {
  let {questions,answers} = props;
  let results = answers.map((answer,i)=>{
    let emo;
    if (answer.toLowerCase() === questions[i][0].toLowerCase()) {
      emo = "✅"
    } else {
      emo = "❌"
    }
    return [questions[i][1],questions[i][0],answer,emo]
  })
  console.log(results)
  return(
    <div className="result-list-block">
      <h1>FINISH</h1>
      <div className="result-item-block">
        <span  className = "bold">Question</span>
        <span  className = "bold">Answer</span>
        <span  className = "bold">Yours</span>
        <span role="img" aria-label="result"  className = "bold">🎓</span>
      </div>
      {results.map((result, i) => <ResultItem question= {result[0]} actualAnswer={result[1]} answer={result[2]} emo={result[3]} key={i}/>)}
    </div>
  )
}
export default ResultList;