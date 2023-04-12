import React from "react";
import "./Book.css";
import logo from "./books.jpg";

export default function Book() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6 mt-5">
          <h1>Find the books you've been looking for.</h1>
          <p className="mt-4">
            BookHound makes it easy to find any book. Search and browse
            through lists of books that match a given search word or phrase. You can view
            information about a book including availability, price, and a
            preview of the book.
          </p>
          <form>
            <div className="row mt-5">
                <div className="col-9">
            <input type="search" placeholder="Search for a book" className="searchBox" />
            </div>
            <div className="col-3">
            <input type="submit" value="🔍 Find Book" className="searchButton"/>
            </div>
            </div>
        </form>
        </div>
        <div className="col-6 mt-5">
          <img src={logo} alt="books" className="img-fluid app-logo" />
        </div>
        
      </div>
    </div>
  );
}
