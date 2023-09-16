import React from "react";
import MainRight from "./MainRight/MainRight.jsx";
import TableMain from "./TableMain/TableMain";
import MainLeft from "./MainLeft/MainLeft.jsx";

function ContentRowMain() {
    return (
        <div className="row">

            <MainLeft />

            <MainRight />

            <TableMain />
        </div>
    )
};

export default ContentRowMain