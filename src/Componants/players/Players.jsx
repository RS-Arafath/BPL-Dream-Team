import React, { use } from 'react';
import AvailaablePlayers from '../HomePage/banner/availablePlayers/AvailaablePlayers';

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 items-center">
        <h2 className="font-bold text-3xl">
          Available Players: {players.length}
        </h2>

        <div>
          <button className="btn  bg-[#e7fe29] rounded-r-none rounded-l-xl ">
            Availavle
          </button>
          <button className="btn rounded-l-none rounded-r-xl font-bold">
            Selected
          </button>
        </div>
      </div>
      <AvailaablePlayers players={players}></AvailaablePlayers>
    </div>
  );
};

export default Players;
