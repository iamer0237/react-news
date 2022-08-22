import React from "react"

export default function ItemList(props) {
    return (
        <div className="news">
            <h4>{props.news.title}</h4>
            <p>{props.news.author}</p>
            <p>{props.news.objectID}</p>
        </div>
    );
};