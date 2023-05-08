import React from 'react'

export default function Todo({todo,index,markTodo,deleteTodo}) {
    
  return (
    <div>
        <div className="col-4 m-3">
            <div className="card text-center">
                <div className="card-header">
                    <h4>{index +1}</h4>
                </div>
                <div className="card-body">
                    <h3 className={todo.done ? "complete" : "incomplete"}>{todo.msg}</h3>
                </div>
                <div className="card-footer">
                    <button onClick={()=>{deleteTodo(index)}} className='btn btn-danger float-left m-3'>Delete</button>
                    <button onClick={()=>{markTodo(index)}} className='btn btn-warning float-right m-3'>Mark</button>
                </div>
            </div>
        </div>
    </div>
  )
}
