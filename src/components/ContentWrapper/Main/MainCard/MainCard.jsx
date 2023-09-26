import React from "react";

function LastProductCard({img, name, detail, title, link}) {

    return (
        <div className="col-lg-6 mb-4">     
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último {title} agregado</h5>
                </div>
                <div className="card-body">
                    <h3>{name}</h3>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={img} alt={name} id="no-te-rompas-por-favor" />
                    </div>
                    <p>{detail}</p>
                    {link}
                </div>
            </div>
        </div>
    )
}

export default LastProductCard