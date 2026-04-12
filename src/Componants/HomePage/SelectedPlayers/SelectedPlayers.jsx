import React from 'react';
import Players from '../../players/Players';

import SelectedPlayer from '../../ui/SelectedPlayer';
const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  const handleDeleteSelectedPlayes = (player) => {
    console.log(selectedPlayers, 'selectedplayer');
    const filterPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(filterPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div>
      {selectedPlayers.length === 0 ? (
        // no available player box
        <div className='my-5 md:my-10 mx-2'>
          <div className=" border rounded-2xl p-5 md:p-10 flex flex-col justify-center items-center space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold ">No player selected yet</h2>
            <p className='text-lg font-semibold text-blue-500'>Go to Available tab to select player</p>
          </div>
        </div>
      ) : (
        selectedPlayers.map((player, ind) => {
          return (
            <SelectedPlayer
              player={player}
              key={ind}
              handleDeleteSelectedPlayes={handleDeleteSelectedPlayes}
            ></SelectedPlayer>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
