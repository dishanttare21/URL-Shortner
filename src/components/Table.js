import React from 'react'
import moment from 'moment'

const Table = ({long, short, date}) => {
    return (
        <div>
            <a href={long} target="_blank" rel="noreferrer">{long}</a> <br />
            <a href={`https://shtme.herokuapp.com/${short}`} target="_blank" rel="noreferrer">shtme.herokuapp.com//{short}</a>
            {/* <p>{moment(date).calendar()}</p> */}
        </div>
    )
}

export default Table
