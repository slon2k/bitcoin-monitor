import React from 'react'

const Rate = ({item, prev}) => {

    const {rate_float} = prev;

    return(
        <div>
            <strong>{item.code}: </strong>{' '}
            <span>{item.rate_float.toFixed(4)}</span> {'   '}
            <span>{rate_float.toFixed(4)} </span> {'   '}
            <span>{(item.rate_float - rate_float).toFixed(4)}</span>
        </div>
    )
}

export default Rate