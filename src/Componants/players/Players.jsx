import React, { use, useState } from 'react';
import AvailaablePlayers from '../HomePage/banner/availablePlayers/AvailaablePlayers';
import SelectedPlayers from '../HomePage/SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState('available');

  // for selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 items-center">
        {selectedType === 'available' ? (
          <h2 className="font-bold text-3xl">
            Available Players: {players.length}
          </h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players:({selectedPlayers.length}/{players.length})
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
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === 'available' ? (
        <AvailaablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        ></AvailaablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
