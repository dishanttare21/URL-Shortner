import React, { useState, useRef, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ReactComponent as MainImg } from '../images/urlshortner.svg';
import Form from './Form';
import Table from './Table';
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from 'axios';

const Home = ({ open, handleOpenLogin, handleClose }) => {
    const [urls, setUrls] = useState([]);
    const [showStats, setShowStats] = useState(false);
    const [loading, setLoading] = useState(false);

    const { user } = useContext(AuthContext);
    console.log('user: ' + user)

    const firstItemRef = useRef(null);
    useEffect(() => {
        if (user) {
            fetchUrls();
        }
    }, [])

    const fetchUrls = async () => {
        const api = process.env.REACT_APP_HOSTED_BASE_URL;
        console.log(api);
        try {
            setLoading(true);
            const response = await axios.post(`${api}all`, { userId: user._id });
            setUrls(response.data);
            setLoading(false)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = async () => {
        if (user) {
            await fetchUrls();
            setShowStats(true)
            firstItemRef.current.scrollIntoView()
        } else {
            handleOpenLogin();
        }

    }
    return (
        <>
            <section className="home">
                <div className="intro">
                    <div className="description">
                        <h1 className="main-phrase">Short <span>Links</span>, Big <span>Results</span></h1>
                        <p>Shorten Links in seconds with ease</p>
                    </div>
                    <div className="home-img">
                        <MainImg />
                    </div>
                </div>
                <div className="home-form">
                    <Form urls={urls} setUrls={setUrls} />
                </div>
                <div>
                    {loading
                        ? (
                            <button className='btn btn-blue stats-btn' disabled>Loading</button>
                        )
                        : (
                            showStats
                                ? (
                                    <button className='btn btn-blue stats-btn' onClick={handleClick}>
                                        <RefreshIcon sx={{ marginRight: 0.5 }} />
                                        Refresh
                                    </button>
                                )
                                : (
                                    <button className='btn btn-blue stats-btn' onClick={handleClick}>View History</button>
                                )
                        )
                    }
                </div>
                <div>
                    {showStats
                        ? (
                            <Table urls={urls} />
                        )
                        : ''
                    }
                </div>
            </section>

            <div ref={firstItemRef}></div>
        </>
    )
}

export default Home
