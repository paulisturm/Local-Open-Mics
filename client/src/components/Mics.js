import React from 'react';
import BMC from '../assets/BMC.jpg';
import Agora from '../assets/The Agora.jpg';
import MusicBox from '../assets/Music Box.jpg';
import Playhouse from '../assets/Playhouse Square.jpg';
import HOB from '../assets/HOB-Cleveland.jpg'
import JP from '../assets/Jacobs-Pavillion.jpg'


function Mics() {
    return (
        <><h1>Mics</h1>
        <p className="text-center">Checkout the upcoming events at these venues</p>
        <div className="container">
            <a className='col' href='https://www.clevelandamphitheater.com'> <img style={{ width:300, height: 200}} src= {BMC}></img></a>
            <a className='col' href='https://www.agoracleveland.com/'> <img style={{ width:300, height: 200}} src= {Agora}></img></a>
            <a className='col' href='https://musicboxcle.com'> <img style={{ width:300, height: 200}} src= {MusicBox}></img></a>
            <a className='col' href='https://www.playhousesquare.org'> <img style={{ width:300, height: 200}} src= {Playhouse}></img></a>
            <a className='col' href='https://www.houseofblues.com/cleveland'> <img style={{ width:300, height: 200}} src= {HOB}></img></a>
            <a className='col' href='https://www.jacobspavilion.com/'> <img style={{ width:300, height: 200}} src= {JP}></img></a>
            </div>
        </>

    )
}

export default Mics