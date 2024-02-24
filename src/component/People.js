import React from 'react';
import "./People.css"
import videoBg from '../videoBg.mp4';
export default function People({ data }) {
  return (
    <section>
      <video className='video-bg' autoPlay loop muted>
        <source src={videoBg} type='video/mp4' />
      </video>
      <h1 className='text' style={{ textAlign: 'center', padding: '10px', fontSize: "4rem" }}>People</h1>
      <div className='COntainer' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>
        {data.map((people, i) => (
          <div className='people text' key={i} style={{ width: '25%', margin: '30px', padding: '30px', borderRadius: '8px' }}>
            <h2>{people.name}</h2>
            <p>
              <strong>Height:</strong> {people.height}
            </p>
            <p>
              <strong>Mass:</strong> {people.mass}
            </p>
            <p>
              <strong>Hair Color:</strong> {people.hair_color}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

