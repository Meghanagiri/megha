import React, { Component } from "react";
//import FlipMove from "react-flip-move";
const textStyle = { textDecoration: 'line-through' }
class TodoItems extends Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item) {

        return (<li key={item.key}>
            <input onChange={() => { this.props.onCheck(item.key) }} type='checkbox' key={item.key} />

            <label htmlFor={item.key}>{item.text}</label>
        </li>);
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">

                {listItems}



            </ul>
        );
    }
}
export default TodoItems;