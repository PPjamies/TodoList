import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import TodoList from "./TodoList";
//This tells our bunding tool to take all the various pieces of our app
//and put it into one html,css, and js bundle


//this will place the word hello into the destination specified as #container
var destination = document.querySelector("#container");

//instantiating TodoList class
ReactDOM.render(
    <div>
        <TodoList/> 
    </div>,
    destination
);