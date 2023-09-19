import React from "react";

export default function TableContent (props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.category}</td>
            <td>{props.brand}</td>
            <td>{props.detail}</td>
        </tr>
    )
}
