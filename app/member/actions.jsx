export const ADD_TODO = 'ADD_TODO';

export const addtodo = (sid)=>({ 
    type: ADD_TODO,
    id:sid,
    text:'some test '+sid ,
    completed:true
})
