import React from "react";
import "./Book.css";


export default function Book() {
    return(
        <div className= "App">
        <h2>Hello from Book</h2>
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Search for a book" />
            </div>
            <div className="col-3">
            <input type="submit" value="🔍 Find Book" className="searchButton"/>
            </div>
            </div>
        </form>
        </div>
    )
}