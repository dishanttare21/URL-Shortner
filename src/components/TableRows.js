import React from 'react'

const TableRows = ({ long, short, date, clicks, urlDescription }) => {
    return (
        <tr>
            <td><a href={long} target="_blank" rel="noreferrer">{long}</a> <br /></td>
            <td><a href={`http://localhost:5000/${short}`} target="_blank" rel="noreferrer">localhost:5000/{short}</a></td>
            <td>{clicks} clicks</td>
            <td>{urlDescription ? urlDescription : '-' }</td>
        </tr>
    )
}

export default TableRows