import React from "react";
import { connect } from "react-redux";

class CreateTodo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todo:[],
        }
    }

    handleChange = (event) => {
        const {value} = event.target;
        let todo = {
            todo:value,
            isDone:false
        }
        this.setState({todo});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let {todo} = this.state;
        this.props.dispatch({
            type:"createTodo",
            payload:todo
        })        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="border-2 rounded" name="todo" onChange={this.handleChange} />
                    <button type="submit" className="bg-green-500 py-1 px-2 rounded ml-3 text-gray-50">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(CreateTodo);