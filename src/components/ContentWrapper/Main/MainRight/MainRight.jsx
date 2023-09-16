import React, {Component} from "react";
import GenresRight from "./Genres/GenresRight.jsx";

class MainRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: []
        };
    }

    async componentDidMount() {
        const fetchData = await fetch('/api/genres');
        const fetchJson = await fetchData.json();
        this.setState({
            genres: fetchJson.data.map(row => row.name)
        })
    }

    overEffect() {
        document.querySelector('#genres-container').classList.add('bg-secondary')
    }

    outEffect() {
        document.querySelector('#genres-container').classList.remove('bg-secondary')
    }

    render() {

        return (
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.overEffect} onMouseOut={this.outEffect}>Genres in Data Base</h5>
                    </div>
                    <div className="card-body" id="genres-container">
                        <div className="row">
                            
                            {this.state.genres.map((genre, i) => {

                                return <GenresRight key={genre + i} name={genre}/>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MainRight