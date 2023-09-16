import React, {Component} from "react";

class TableContent extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.length}</td>
                <td>{this.props.rate}</td>
                <td>
                    <ul>
                        {/* {this.props.genres.map( (genre, i) => <li key={i}>{genre}</li>)} */}
                        {this.props.genre}
                    </ul>
                </td>
                <td>{this.props.awards}</td>
            </tr>
        )
    }
}

export default TableContent