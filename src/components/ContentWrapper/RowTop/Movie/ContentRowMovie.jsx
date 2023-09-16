import React from "react";
import PropTypes from 'prop-types'

function ContentRowMovie (props) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.border} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.border} text-uppercase mb-1`}>{props.name}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ContentRowMovie.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    border: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

ContentRowMovie.defaultProps = {
    name: 'Movies in Data Base',
    quantity: 21,
    border: 'primary',
    icon: 'fa-film'
};

export default ContentRowMovie