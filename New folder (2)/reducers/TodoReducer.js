const initialstate={
    data:[],
};
const todos=(state=initialstate,action)=>{
    switch(action.type){
        case "add_task":
            return {
                ...state,
                data:[
                    ...state.data,
                    {
                        message:action.payload,
                        id:Date.now()
                    }
                ]
            };
   
        case 'delete_Task':
            const todos=state.data.filter((todo)=>todo.id!==action.payload)
            return{
                ...state,
                data:todos
            };
            default:
                return state;
    }
}
export default todos;