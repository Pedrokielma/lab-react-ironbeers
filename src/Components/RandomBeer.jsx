import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import axios from 'axios';

function RandomBeer() {
  const [getRandomBeers, setGetRandomBeers] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');

      let beersFromAPI = response.data;
      console.log(beersFromAPI);
      setGetRandomBeers(beersFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


    return (
    <div>
       <NavBar></NavBar>

       <div>
          <img src={getRandomBeers.image_url} alt={getRandomBeers.name} />
          <h2>{getRandomBeers.name}</h2>
          <h4>{getRandomBeers.tagline}</h4>
          <h6>{getRandomBeers.first_brewed}</h6>
          <h6>{getRandomBeers.attenuation_level}</h6>
          <p>{getRandomBeers.description}</p>
          <h3>{getRandomBeers.contributed_by}</h3>   
                      
      </div>
    </div>
  )
}

export default RandomBeer