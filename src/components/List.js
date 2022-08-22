import React from "react"
import data from "./../hackernews.json"
import ItemList from "./ItemList"

export default function CreateList() {
    return (
        <div className="listContainer">
            {data.hits.map((element, index) => {
                return <ItemList key={element.objectID} news={element} index={index + 1} />;
            })};
        </div>
    );
};