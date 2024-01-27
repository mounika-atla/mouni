const intialstate={
    todos:['getting a job','making parents happy','buying a gift for daddy','trip with frnds'],
    newtodo:''
}
const todoReducer=function(state=intialstate,action){
    if(action.type==="UPDATENEWTODO"){
        return{...state, newtodo:action.payload}
    }
    if(action.type==="ADDTODO"){
        return{...state,todos:[...state.todos,state.newtodo]}
    }
    if(action.type==="DELETETODOS"){
    var temp=[...state.todos];
    temp.slice(action.index,1)
        return{...state,todos:[...temp]}
    }
    
    return state
}
export default todoReducer;