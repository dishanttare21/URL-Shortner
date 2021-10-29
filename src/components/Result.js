import React from 'react'

const Result = ({setDisabled, shortUrl}) => {
    function copy(){
        navigator.clipboard.writeText(shortUrl); 
        setTimeout(() => {
            setDisabled(true)
        }, 500);
    }
    return (
        <div>
            <a href={`https://${shortUrl}`} target="_blank" rel="noreferrer">{shortUrl}</a>
            <button className="btn btn-grey copy" id="copy" onClick={copy}>Copy</button>
        </div>
    )
}

export default Result
