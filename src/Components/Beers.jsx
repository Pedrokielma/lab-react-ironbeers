import React from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Beers() {
    const [beers, setBeers] = useState([]);
    const fetchData = async () => {
        try {
          let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    
          let beersFromAPI = response.data;
          console.log(beersFromAPI);
          setBeers(beersFromAPI);
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
       
        {beers.map((beer) =>{
            return (
                <div key={beer._id}>
                  <Link to={`/${beer._id}`}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h2>{beer.name}</h2> 
                  </Link>  
                   <h4>{beer.tagline}</h4>
                   <h3>{beer.contributed_by}</h3>
                </div>
            );
        })}
    </div>

  )
}

export default Beers