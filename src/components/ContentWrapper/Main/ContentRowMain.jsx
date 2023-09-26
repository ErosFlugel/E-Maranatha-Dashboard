import React from "react";
import MainCard from "./MainCard/MainCard.jsx";
import SkeletonMainCard from "./SkeletonMainCard/SkeletonMainCard.jsx";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"

function ContentRowMain({lastProduct, lastUser, userModalToggle}) {

    const userLink = <Link to='/users' onClick={() => userModalToggle(lastUser.id)}><Button variant='contained'>Ver Detalle</Button></Link>;
    const productLink = <a target="_blank" rel="nofollow noreferrer" href={lastProduct ? 'http://localhost:3009' + lastProduct.detailLink : ''}><Button variant='contained'>Ver Detalle</Button></a>;

    return (
        <div className={lastProduct && lastUser ? 'row' : 'row justify-content-around'}>

            {lastProduct ? <MainCard img={lastProduct.image[0]} name={lastProduct.nombre} detail={lastProduct.detalle} title="producto" link={productLink}/> : <SkeletonMainCard/>}

            {lastUser ? <MainCard img={lastUser.imagen} name={lastUser.nombre} detail={lastUser.email} title="usuario" link={userLink}/> : <SkeletonMainCard/>}
        </div>
    )
};

export default ContentRowMain