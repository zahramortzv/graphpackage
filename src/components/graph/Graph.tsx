import React from "react";

interface graphI {
    label : string
}

const Graph = (props : graphI) => {
    return (
        <button>{props.label}</button>
    )
}

export default Graph   