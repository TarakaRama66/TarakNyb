import React from "react";
import { useSelector} from "react-redux";
function Z(){
  let d=useSelector((state)=>{
    return state.count.value
  })
  console.log(d)
  return(
    <div>Z</div>
  )
}

export default Z;