import React from "react";
import MainCard from "./MainCard/MainCard.jsx";
import SkeletonMainCard from "./SkeletonMainCard/SkeletonMainCard.jsx";

function ContentRowMain({lastProduct, lastUser, userModalToggle}) {

    return (
        <div className={lastProduct && lastUser ? 'row' : 'row justify-content-around'}>

            {lastProduct ? <MainCard img={lastProduct.image[0]} name={lastProduct.nombre} detail={lastProduct.detalle} title="producto" url={'http://localhost:3009' + lastProduct.detailLink} outPage={true} handlers={userModalToggle}/> : <SkeletonMainCard/>}

            {lastUser ? <MainCard img={lastUser.imagen} name={lastUser.nombre} detail={lastUser.email} title="usuario" url={'/users'} outPage={false} userModalToggle={userModalToggle}/> : <SkeletonMainCard/>}
        </div>
    )
};

export default ContentRowMain