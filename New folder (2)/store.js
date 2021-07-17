import React from 'react'
import {createStore} from "redux";

const todo=(state,action)=>{
    switch(action.type){
        case "add_task":
        return {
                id:Date.now(),
                text:action.payload
                }
        default :return state
    }
}
function TaskReducer(state=[],action) {
    switch(action.type){
        case "add_task":
            let newTask=[
                ...state, 
                todo(state,action)
            ]     
            return newTask;  
           default: return state
    }    
}
const store=createStore(TaskReducer)
export default store
