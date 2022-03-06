import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage";
import Beers from "./Components/Beers";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import SingleBeer from "./Components/SingleBeer";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={ <RandomBeer /> } />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
