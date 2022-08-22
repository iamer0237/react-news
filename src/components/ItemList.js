import React from "react"

export default function ItemList(props) {
    const shortUrl = (url) => {
        if (url) {
            const array = url.split('/')
            return `${array[0]}//${array[2]}`
        }
    }

    return (
        <div className="newsFeed">
            <div className="newsTitle">
                <div className="numbers">{props.index}.</div>
                <a href={props.news.url} target="_blank">{props.news.title}</a>
                <div>{shortUrl(props.news.url)}</div>
            </div>
            <div className="newsInfo">
                <div><p>{props.news.points} points by {props.news.author} | {props.news.num_comments} comments | ID: {props.news.objectID}</p></div>
            </div>
        </div>
    );
};