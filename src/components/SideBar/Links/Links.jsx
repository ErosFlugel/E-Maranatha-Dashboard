import React, {Component} from "react";
import {Link} from 'react-router-dom'

class LinksComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <li className={this.props.liClass}>
				<Link className={this.props.linkClass} to={this.props.path}>
					<i className={this.props.iconClass}></i>
					<span>{this.props.name}</span>
				</Link>
			</li>
        );
    }
};

export default LinksComponent