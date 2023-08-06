import React from 'react';
import bonJovi from '../assets/Bon Jovi Tribute.jpg';
import jasonAldean from '../assets/Jason Aldean 2023.jpg';
import jimGaffigan from '../assets/Jim-Gaffigan.jpg';
import Stones from '../assets/stones tribute.jpg';
import beachBoys from '../assets/The Beach Boys.jpg';
import karaoke from '../assets/Karaoke at the agora.jpg';

function Mics() {
    return (
        <>
            <h1>Mics</h1>
            <p className="text-center">Checkout the upcoming events at these venues</p>
            <div className="container">
                <a className='col' href='https://www.clevelandamphitheater.com'> <img style={{ width: 300, height: 200 }} src={bonJovi}></img></a>
                <a className='col' href='https://www.agoracleveland.com/'> <img style={{ width: 300, height: 200 }} src={jasonAldean}></img></a>
                <a className='col' href='https://musicboxcle.com'> <img style={{ width: 300, height: 200 }} src={jimGaffigan}></img></a>
                <a className='col' href='https://www.playhousesquare.org'> <img style={{ width: 300, height: 200 }} src={Stones}></img></a>
                <a className='col' href='https://www.houseofblues.com/cleveland'> <img style={{ width: 300, height: 200 }} src={beachBoys}></img></a>
                <a className='col' href='https://www.agoracleveland.com/events/detail/494709'> <img style= {{ width: 300, height: 200}} src={karaoke}></img> </a>
            </div>
        </>
    )
}

export default Mics