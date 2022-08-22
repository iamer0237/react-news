import React from "react"

export default function ItemList(props) {
    return (
        <div className="newsFeed">
            <div className="newsTitle">
                <div className="numbers">{props.index}.</div>
                <h4>{props.news.title}</h4>
            </div>
            <div className="newsInfo">
                <div><p>{props.news.points} points by {props.news.author} | {props.news.num_comments} comments | ID: {props.news.objectID}</p></div>
            </div>
        </div>
    );
};