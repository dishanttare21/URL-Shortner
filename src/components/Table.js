import React from 'react'
import TableRows from './TableRows';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import moment from 'moment'

const Table = ({ urls }) => {
    return (
        <>
            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Long Urls</TableCell>
                            <TableCell align="right">Short Urls</TableCell>
                            <TableCell align="right">Clicks</TableCell>
                            <TableCell align="right">Url Description</TableCell>
                        </TableRow>
                    </TableHead>

                </Table>
            </TableContainer> */}
            <table className='stats-table'>
                <tbody>
                    <tr>
                        <th>Long Urls</th>
                        <th>Short Urls</th>
                        <th>Clicks</th>
                        <th>Url Description</th>
                    </tr>
                    {urls.map(url => (
                        <TableRows
                            key={url._id}
                            long={url.longUrl}
                            short={url.shortUrl}
                            date={url.date}
                            clicks={url.clicks}
                            urlDescription={url.urlDescription} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table
