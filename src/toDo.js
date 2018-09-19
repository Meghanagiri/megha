import React, { Component } from "react";
import TodoItems from "./TodoItems";
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input:"",
            items :[]
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(e){
        if(this.state.input !==""){
            var newItem ={
                text:this.state.input,
                key:Date.now()
            };
            this.setState((prevState)=>{
                return{
                    items:prevState.items.concat(newItem)
                };
            });
        }
        this.setState(
            {
                input: ""
            }
        ) ;
            
        console.log(this.state.items);
        e.preventDefault();

    }
    render() {
        //console.log(this.state.items);
        return (
            <div className = "todoListMain">
             <div className="header">
            <form onSubmit={this.addItem}>
            <input onChange={(evt)=>(this.setState({input:evt.target.value}))}        
            placeholder="enter task">
            </input>
            <button type="submit">add</button>
            </form>
            </div>
            <TodoItems entries={this.state.items}/>
            </div>
        );
        
    }
}
export default TodoList;