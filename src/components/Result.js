import React from 'react'

const Result = ({ copy, setCopy, shortUrl }) => {
    function copyUrl() {
        navigator.clipboard.writeText(shortUrl);
        setTimeout(() => {
            setCopy(true)
        }, 500);
    }

    return (
        <div>

            {copy
                ? ''
                : (
                    <>
                        <a href={`https://${shortUrl}`} target="_blank" rel="noreferrer">{shortUrl}</a>
                        <button className="btn btn-grey copy" id="copy" onClick={copyUrl}>Copy</button>
                    </>
                )}
        </div>
    )
}

export default Result
