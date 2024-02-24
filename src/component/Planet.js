import React from 'react';
import './Planet.css';
import videoBg from '../videoBg.mp4';

export default function Planet({ data }) {
    return (
        <section>
            <video className='video-bg' autoPlay loop muted>
                <source src={videoBg} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <h1 className='texts' style={{ textAlign: 'center', padding: '10px', fontSize: "4rem" }}>Planets</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>
                {data.map((planets, i) => (
                    <div className='Planet texts' key={i} style={{ width: '25%', margin: '30px', padding: '30px', borderRadius: '10px' }}>
                        <h2>{planets.name}</h2>
                        <p>
                            <strong>Climate:</strong> {planets.climate}
                        </p>
                        <p>
                            <strong>Population:</strong> {planets.population}
                        </p>
                        <p>
                            <strong>Terrain:</strong> {planets.terrain}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
