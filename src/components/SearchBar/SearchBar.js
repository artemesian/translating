import React from "react";
import search from "../../assets/search.png";
import "./SearchBar.css";
 
const SearchBar=(props)=>{
    return(
        <div id="searchbar-wrapper">
            <div id="searchbar-container">
                <img src={search} alt="search"/>
                <input type="search"
                    id="searchbar-input" 
                    placeholder="search here.........." 
                    onChange={(e)=>props.onInputChange("searchfield",e.target.value)}
                />
            </div>
        </div>      
    )
}

export default SearchBar;