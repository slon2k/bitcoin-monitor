import React from 'react'

const Rate = ({item}) => {
    return(
        <div>
            <h3>{item.code}: {item.rate_float}</h3>
        </div>
    )
}

export default Rate