import React from "react";
import Book from "./Book";

function Library(props){ 
    return (
        <div>
            <Book name="삼국지 " numOfPage={300}/>
            <Book name="논어 " numOfPage={800}/>
            <Book name="사기 " numOfPage={500}/>
        </div>
    );
}

export default Library;