import React from "react";

export default function AnchorProduct({url, content}) {
    return (
        <a href={'http://localhost:3009' + url} target="_blank" rel="noopener noreferrer">{content}</a>
    )
}