import React from 'react'

const Styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        width: '100vw',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '2rem',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '1rem',
        margin: '1rem',
        border: '1px solid white',
        borderRadius: '1rem',
        boxShadow: '0 0 10px white',
        textShadow: '0 0 10px white',
    },
    image: {
        height: '50vh',
        width: '50vw',
        border: '1px solid white',
        borderRadius: '1rem',
        boxShadow: '0 0 10px white',
        textShadow: '0 0 10px white',
    }
}

function Mics (props) {
    return (
        <div className="container" style={Styles.container}>
            <div className="img-container" style={Styles.image}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                    <li>
                        <strong>Host:</strong> {props.host}
                    </li>
                    <li>
                        <strong>Date/Time:</strong> {props.date}
                    </li>
                    <li>
                        <strong>Description:</strong> {props.description}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function MicsList() {
    const mics = [
        {
            Location: 'Blossom Music Center',
            Host: 'Live Nation',
            Date: 'August 11, 2023',
            Description: 'The Black Crowes Present: Shake Your Money Maker',
            image: '../assets/BMC.jpg'
        },
        {
            Location: 'Playhouse Square',
            Host: 'Playhouse Square',
            Date: 'August 18, 2023',
            Description: 'Hamilton',
            image: '../assets/Playhouse Square.jpg'
        },
        {
            Location: 'The Music Box Supper Club',
            Host: 'The Music Box Supper Club',
            Date: 'August 25, 2023',
            Description: 'Queen Tribute: Queen Nation',
            image: '../assets/Music Box.jpg'
        },
        {
            Location: 'Geauga County Fairgrounds',
            Host: 'Geauga County Fairgrounds',
            Date: 'September 1, 2023',
            Description: 'Cleveland Country Music Fest',
            image: '../assets/Geauga County Fairgrounds.jpg'
        },
    ];

    return (
        <div>
            {mics.map((mic) => (
                <Mics
                    location={mic.Location}
                    host={mic.Host}
                    date={mic.Date}
                    description={mic.Description}
                    image={mic.image}
                />
            ))}
        </div>
    );
}