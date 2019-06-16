import React from 'react'

const Rate = ({item, prev}) => {

    const prevRate = prev === undefined ? null : prev.rate_float;

    return(
        <div>
            <h3>{item.code}: {item.rate_float} - {prevRate}</h3>
        </div>
    )
}

export default Rate