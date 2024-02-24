import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import People from './component/People';
import Planet from './component/Planet';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const res = await axios.get('https://swapi.dev/api/people/?format=json');
        setPeople(res.data.results);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
    }

    async function fetchPlanets() {
      try {
        const res = await axios.get('https://swapi.dev/api/planets/?format=json');
        setPlanets(res.data.results);
      } catch (error) {
        console.error('Error fetching planets data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  console.log('people', people);
  console.log('planets', planets);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          {loading ? (
            <div className="loading">
              <p>Loading...</p>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People data={people} />} />
              <Route path="/planet" element={<Planet data={planets} />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;



