import React, {Component} from "react";
import TableContent from "./TableContent/TableContent.jsx";

class TableMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    async componentDidMount() {
        const dataFetch = await fetch('/api/movies');
        const fetchJson = await dataFetch.json();
        this.setState({
            movies: fetchJson.data
        })
    }
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map((row, i) => {
                        return <TableContent id={row.id} name={row.title} rate={row.rating} length={row.length} genre={row.genre ? row.genre.name : null} awards={row.awards} key={i}/>
                    })}
                </tbody>
            </table>
        )
    }
}

export default TableMain