import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {

    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    //TodoItems is only responsible for the display.
    //it has no concept of the array holding the todo items
    //this is method tells the array in todolist to delete this key
    delete(key){
        //test
        console.log("Key is:" + key);
        this.props.delete(key);
    }

    //create a list a list element where each items value is the key
    //and the text value
    createTasks(item){
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

    render(){
        //getting the copy of our props
        var todoEntries = this.props.entries;
        //take every item in the todoEntries array
        //and utilize a map function to iterate through every item
        var listItems = todoEntries.map(this.createTasks);

        //then print the all the entries out on screen
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}
export default TodoItems;
