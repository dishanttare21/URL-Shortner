import React from 'react'

const TableRows = ({ long, short, date, clicks, urlDescription }) => {
    const api = process.env.REACT_APP_HOSTED_BASE_URL;
    return (
        <tr>
            <td><a href={long} target="_blank" rel="noreferrer">{long}</a> <br /></td>
            <td><a href={`${api}${short}`} target="_blank" rel="noreferrer">shtme.herokuapp.com/{short}</a></td>
            <td>{clicks} clicks</td>
            <td>{urlDescription ? urlDescription : '-' }</td>
        </tr>
    )
}

export default TableRows