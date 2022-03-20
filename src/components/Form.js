import React, { useState, useEffect, useRef } from 'react'
// import isURL from 'validator/lib/isURL';
import Result from './Result';
import axios from 'axios';
const Form = ({fetchUrls, urls, setUrls}) => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [urlDesc, setUrlDesc] = useState('');
    const [copy, setCopy] = useState(true);

    useEffect(() => {

    }, [loading])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const response = await axios.post('http://localhost:5000/shorten', { userId: '622cc236b059a4da868ccc1a', longUrl: longUrl, urlDescription: urlDesc })
        const data = response.data;
        console.log(data);
        setShortUrl(data.shortUrl)
        setLoading(false);
        setTimeout(() => {
            setDisabled(false);
            setCopy(false);
        }, 2000);
        setLongUrl('');
        setUrlDesc('');
        // fetch('http://localhost:5000/shorten', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ longUrl: longUrl, urlDescription: urlDesc })
        // })
        //     .then(response => response.json())
        //     .then(response => setShortUrl(response.shortUrl))
        //     .then(setLoading(false))
        //     .then(console.log(shortUrl))
        //     .then(() => {
        //         setTimeout(() => {
        //             setDisabled(false)
        //             document.getElementById('submit').disabled = false;
        //         }, 1000);
        //     })
        //     .catch(error => console.log(error))
        //     .then(() => {
        //         console.log('url shotned');
        //     });
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

                <input
                    type="text"
                    placeholder='Add a short description (optional)'
                    value={urlDesc}
                    onChange={e => setUrlDesc(e.target.value)}
                />
                {disabled
                    ? (
                        <button type="submit" className="btn btn-grey" id="submit" disabled>Shrinking</button>
                    )
                    : (
                        <button type="submit" className="btn btn-grey" id="submit">Shrink</button>
                    )}
            </form>
            <div className="result-div">
                {disabled ? (<></>) : <Result copy={copy} setCopy={setCopy} shortUrl={shortUrl} />}
            </div>

        </div>
    )
}

export default Form
