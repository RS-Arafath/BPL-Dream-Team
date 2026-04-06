import React, { use } from 'react';
import AvailaablePlayers from '../HomePage/banner/availablePlayers/AvailaablePlayers';

const Players = ({ playersPromise }) => {
  const players=use(playersPromise)
  
  return (
    <div className='container mx-auto'>
      <AvailaablePlayers players={players}></AvailaablePlayers>
    </div>
  );
};

export default Players;