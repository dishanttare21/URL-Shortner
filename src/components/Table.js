import React from 'react'
import moment from 'moment'

const Table = ({long, short, date}) => {
    return (
        <div>
            <a href={long} target="_blank" rel="noreferrer">{long}</a> <br />
            <a href={`http://Localhost:5000/${short}`} target="_blank" rel="noreferrer">Localhost:5000/{short}</a>
            {/* <p>{moment(date).calendar()}</p> */}
        </div>
    )
}

export default Table
