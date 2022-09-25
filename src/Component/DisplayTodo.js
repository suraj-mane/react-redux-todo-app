import React from "react";
import { connect } from "react-redux";

function DisplayTodo(props){
    function handleClick(id){
        props.dispatch({
            type:"click",
            id
        })
    }

    function handleDelete(id){
        props.dispatch({
            type:"delete",
            id
        })
    }
    return (
        <div className="w-1/2 mx-auto p-2">
            {
                props.todo.map((todos,index) => (
                    <div key={todos.todo} className="flex text-center">
                        <input type="checkbox"  defaultChecked={false} onClick={() => handleClick(index)}/>
                        <h2 className="ml-2">{todos.todo}</h2>
                        <span onClick={() => handleDelete(index)}>❌</span>
                    </div>
                ))
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        todo:state,
    }
}

export default connect(mapStateToProps)(DisplayTodo);