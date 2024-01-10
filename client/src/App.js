import React from 'react';
import Card from './components/Card/Card';
import Details from './components/Details/Details';
import Parchment from './components/Parchment/Parchment';
import PotluckList from './components/PotluckList/PotluckList';

function App() {
  return (
    <>
      <Card />
      <Parchment />
      <Details />
      <PotluckList />
    </>
  );
}

export default App;
