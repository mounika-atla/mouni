const intialstate={
    count:100
}
var counterreducer=function(state=intialstate,action){
    if(action.type==="INCREMENT")
    {
        return{...state,count:state.count+1}
    }
    if(action.type==="DECREMENT")
    {
        return{...state,count:state.count-1}
    }
    if(action.type==="RESET")
    {
        return{...state,count:intialstate.count}
    }

  return state;
}
export default counterreducer