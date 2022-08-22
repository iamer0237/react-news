import React from "react"

export default function ItemList(props) {
    return (
        <li className="newsFeed">
            <div className="newsTitle">
                <h4>{props.news.title}</h4>
            </div>
            <div className="newsInfo">
                <div><p>{props.news.points}</p></div>
                <div><p>{props.news.author}</p></div>
                <div><p>{props.news.num_comments}</p></div>
                <div><p>{props.news.objectID}</p></div>
            </div>
        </li>
    );
};