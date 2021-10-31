import React, { useState, useEffect } from 'react'
// import isURL from 'validator/lib/isURL';
import Result from './Result';

const Form = ({ fetchUrls }) => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
    }, [loading])

    function handleSubmit(e) {
        e.preventDefault();
        document.getElementById('submit').disabled = true; 
        fetch('https://shtme.herokuapp.com/shorten', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ longUrl: longUrl })
        })
            .then(response => response.json())
            .then(response => setShortUrl(response.data))
            .then(setLoading(false))
            .then(console.log(shortUrl))
            .then(() => {
                setTimeout(() => {
                    setDisabled(false)
                    document.getElementById('submit').disabled = false; 

                }, 1000);
            })
            .catch(error => console.log(error))
            .then(() => {
                // fetchUrls();
                console.log('url shotned');
            });
    }


    return (
        <div className="shortner">
            <form action="/shorten" className="form" onSubmit={handleSubmit}>
                <input
                    type="url"
                    name="longUrl"
                    id="longUrl"
                    value={longUrl}
                    onChange={e => setLongUrl(e.target.value)}
                    placeholder="Enter link here"
                    required />
                <button type="submit" className="btn btn-grey" id="submit">Shrink</button>
            </form>
            {loading ? (<p>Loading</p>) : <div className="result-div">
                {disabled ? (<></>) : <Result setDisabled={setDisabled} shortUrl={shortUrl} />}
            </div>}
        </div>
    )
}

export default Form
