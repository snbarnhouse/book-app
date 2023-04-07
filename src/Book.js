import React from "react";
import "./Book.css";


export default function Book() {
    return(
        <div className= "App">
        <h2>Hello from Book</h2>
        <form>
            <div className="row"></div>
            <input type="search" placeholder="Search for a book" />
            <input type="submit" />
        </form>
        </div>
    )
}