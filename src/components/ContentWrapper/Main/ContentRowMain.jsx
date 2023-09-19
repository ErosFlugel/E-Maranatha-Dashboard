import React from "react";
import MainCard from "./MainCard/MainCard.jsx";

function ContentRowMain({lastProduct, lastUser}) {

    return (
        <div className="row">

            <MainCard img={lastProduct ? lastProduct.image[0] : ''} name={lastProduct ? lastProduct.nombre : ""} detail={lastProduct ? lastProduct.detalle : ''} title="producto"/>

            <MainCard img={lastUser ? lastUser.img : ''} name={lastUser ? lastUser.name : ""} detail={lastUser ? lastUser.email : ''} title="usuario"/>
        </div>
    )
};

export default ContentRowMain