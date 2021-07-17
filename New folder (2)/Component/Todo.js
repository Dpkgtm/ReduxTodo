import React, { useState } from 'react'
import {connect } from 'react-redux';
function Todo(props) {
   // console.log(props.id);
  //console.log(props.taskList.length,"length");
    return (
        <>
        <form onSubmit={(event)=>{
                event.preventDefault();
                let input =event.target.userInput.value;
                console.log(input);
                props.addTask(input);
                event.target.userInput.value=""
        }}>
            <input type="text" name="userInput"></input>
            <button>Submit</button>
        </form>
        <ul>
           
            {
                    props.todos.data.map(data=>{
                        return   (<li key={data.id}>
                        {data.message}
                        {      data.id}
                        <button style={{marginLeft:"100px"}} onClick={()=>props.deleteTask(data.id)}>DELETE </button>
                    </li>)
                })
            
            }
        </ul>
        </>
    )
}
const mapStateToProps=store=>{
    console.log("in map state to prop",store);
    return store;
}
const mapDispatchToProps = dispatch => {
    //    action
    // handler function 
    return {
         addTask: (val) =>{
             dispatch({
                 type: "add_task",
                 // data send to reducer function 
                 payload: val
                })
            },
        deleteTask:(val)=>{
            dispatch({
                type:"delete_Task",
                payload:val
            })
        }   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo)
