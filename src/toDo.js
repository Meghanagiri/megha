import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            items: []

        };
        this.addItem = this.addItem.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }


    addItem(e) {
        const existingItems = this.state.items;
        if (this.state.input !== "") {
            var newItem = {
                text: this.state.input,
                key: Date.now(),
                done: false
            };
            existingItems.push(newItem);
            this.setState({ items: existingItems });

            // this.setState((prevState)=>{
            //     return{
            //         items:prevState.items.concat(newItem)
            //     };
            // });
        }
        console.log(this.state.items);
        this.setState(
            {
                input: ""
            }
        );

        console.log(this.state.items);
        e.preventDefault();

    }
    //var filteredItems = this.state.items.filter(function (item) {
    //  return (item.key !== key);
    //});
    //this.setState({
    //items: filteredItems
    //});
    //delete(key) {
    // this.props.delete(key);
    //}
    //deleteItem(key) {
    //var filteredItems = this.state.items.filter(function (item) {
    //return (item.key !== key);
    //});
    //delete(key) {
    //  this.props.delete(key);
    //}

    /* this.setState({
       items: filteredItems
     });
 }
 deleteItem(key){
 this.item.map((item)=> item.key)
 }*/
    deleteTodo(key) {

        const derivedItems = this.state.items.map((item) => {
            if (item.key === key) {
                item.done = true;
                return item;
            }
            return item;
        });
        this.setState({ items: derivedItems });

        console.log(this)
        console.log("tryting to mark as done for key -", key);


    }
    render() {
        //console.log(this.state.items);
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>


                        <input onChange={(evt) => (this.setState({ input: evt.target.value }))}
                            placeholder="enter task">
                        </input>
                        <button type="submit">add</button><br></br>


                    </form>
                </div>
                <TodoItems onCheck={this.deleteTodo} entries={this.state.items}
                              /*delete={this.deleteItem}*/ />
            </div>
        );

    }
}
export default TodoList;