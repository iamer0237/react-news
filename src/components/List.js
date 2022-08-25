import React from "react"
import ItemList from "./ItemList"

export default function CreateList(props) {
    return (
        <div className="listContainer">


            {data.hits.map((element, index) => {

                return <ItemList key={element.objectID} news={element} index={index + 1} />;
            })};
        </div>
    );
};