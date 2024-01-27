import React from "react"
import { connect } from "react-redux"
function Todolist(props)
{
    return(
        <div>
            <h1>Todolist</h1>
            <input type="text" onKeyUp={(e)=>{props.dispatch({type:'UPDATENEWTODO',payload:e.target.value})}}></input>
            <button onClick={()=>{props.dispatch({type:'ADDTODO'})}}>Add</button>
            <ul>{
                props.todolist.todos.map(function( t,i){
                    return (
                     <li>
                         {t}
                         <button onClick={()=>{props.dispatch({type:"DELETETODOS",index:i})}}>Del</button>
                        </li>)
                })
            }
            </ul>
                    </div>
    )
}
export default  connect(function(store){return store})(Todolist)