import React from "react";
import { Skeleton } from "@mui/material";
import MainCard from ".././MainCard/MainCard.jsx";

export default function SkeletonMainCard() {
    return (
        <div className="col">
            <Skeleton variant="rounded" className="m-auto"> 
                <MainCard></MainCard>
            </Skeleton>
            <Skeleton variant="text" height={50} width={60} className="m-auto"/>
        </div>
    )
}