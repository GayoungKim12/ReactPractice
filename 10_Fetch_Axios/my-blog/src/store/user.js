import React, { useState, createContext, useReducer } from "react";

export const UserContext = createContext();

const initialUser = {
  name: "Hosi",
  job: "FE-developer",
}
const userReducer = (state, action) => {
  switch(action.type) {
    case "changeJob": 
      return { ...state, job: action.text }
    default: 
      break;
  }
}

export default function UserStore(props) {
  // const [ job, setJob ] = useState("FE-developer")
  const [ user, dispatch ] = useReducer(userReducer, initialUser)
  console.log(user)
  // const user = {
  //   name: "Hosi",
  //   job,
  //   changeJob: (updatedJob) => {
  //     setJob(updatedJob)
  //   }
  // }

  return (
    <UserContext.Provider value={dispatch}>{props.children}</UserContext.Provider>
  )
}