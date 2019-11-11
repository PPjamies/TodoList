import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component{

    constructor(props){
        super(props);

        //storing item lists into an array
        this.state = {
            items: []
        }
        //binding the right value when addItem is called
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    //e for event args
    addItem(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            //the previos state argument gives a copy of the array
            //then by using the concat method on the array, the newItem
            //is appended to the array
            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }
        //once a value has been submitted, then clear this global variable
        //to avoid mutation
        this._inputElement.value = "";

        //the default form behavior when a form is submitted 
        //is to reload the contents
        //override this default behavior
        e.preventDefault();

        //test
        console.log(this.state.items);
    }

    //key value comes from todoitems
    deleteItem(key){
        console.log("key in deleteItem: " + key);
        console.log("Items at delete: " + this.state.items);

        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }


//onSubmit event, add an event handler called add Item
//when form is submitted, the method addItem is called
//storing the value of a into a global variable called _inputElement
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}> 
                        <input ref={(a) => this._inputElement = a}   
                            placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                            delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;