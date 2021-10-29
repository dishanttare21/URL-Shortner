import React from 'react'
import { ReactComponent as MainImg } from '../images/urlshortner.svg';
import Form from './Form'

const Home = ({ fetchUrls, urls }) => {
    return (
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
                <Form fetchUrls={fetchUrls} urls={urls} />
            </div>

        </section>
    )
}

export default Home
