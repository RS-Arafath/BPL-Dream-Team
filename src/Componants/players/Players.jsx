import React, { use, useState } from 'react';
import AvailaablePlayers from '../HomePage/banner/availablePlayers/AvailaablePlayers';
import SelectedPlayers from '../HomePage/SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  const [selectedType,setSelectedType]=useState('available')

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 items-center">
        {
          selectedType === 'available' ? (
          <h2 className="font-bold text-3xl">
            Available Players: {players.length}
          </h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players:(20/11)
          </h2>
        )}
        
        <div>
          <button
            onClick={() => {
              setSelectedType('available');
            }}
            className={`btn ${selectedType === 'available' ? 'bg-[#e7fe29] font-bold' : ''} rounded-r-none rounded-l-xl`}
          >
            Availavle
          </button>
          <button
            onClick={() => {
              setSelectedType('selected');
            }}
            className={`btn ${selectedType === 'selected' ? 'bg-[#e7fe29] font-bold' : ''} rounded-l-none rounded-r-xl `}
          >
            Selected (0)
          </button>
        </div>
      </div>
      {selectedType==='available' ?  <AvailaablePlayers players={players}></AvailaablePlayers> : <SelectedPlayers></SelectedPlayers>}
    </div>
  );
};

export default Players;
