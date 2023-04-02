import React, { useState } from "react";

export default function Counter() {
  // 값, 값을 변경할 때 쓰는 함수
  const operators = ["+", "-", "*"];

  // const [count, setCount] = useState(0);
  // const [show, setShow] = useState(true);
  // const [operator, setOperator] = useState(operators[0])

  const [info, setInfo] = useState({
    count: 0,
    show: true,
    operator: operators[0]
  });

  return (
    <div>
      <button onClick={() => {
        let result;
        if(info.operator === "+") result = info.count + 1
        if(info.operator === "-") result = info.count - 1
        if(info.operator === "*") result = info.count * 1
        setInfo({ ...info, count: result })
      }}>{info.operator}1</button>
      <button onClick={() => {
        // info.show = !info.show
        // const newInfo = info
        setInfo({ ...info, show: !info.show })
      }}>Show and Hide</button>
      <button 
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length)
          setInfo({ ...info, operator: operators[idx] })}}
      >Change Operator</button>
      <br />
      {info.show && `Counter: ${info.count}`}
    </div>
  )
}