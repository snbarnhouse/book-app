import React from "react";
import "./Book.css";
import logo from "./books.jpg"


export default function Book() {
    return(
        <div className= "App">
            <div className="row">
                <div className="col-6">
        <h1>Find the books you've been looking for.</h1>
        <p>BookHound has made it easy to find any book. Search and browse through lists of books that match a given search word. You can view information about a book including availability, price, and a preview of the book.</p>
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Search for a book" />
            </div>
            <div className="col-3">
            <input type="submit" value="🔍 Find Book" className="searchButton"/>
            </div>
            </div>
            <div className="col-6">
                <img src={logo} alt="books" className="img-fluid app-logo"/>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
}