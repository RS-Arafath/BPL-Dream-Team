import React from 'react';
import Players from '../../players/Players';
import { MdDeleteForever } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }) => {
  const handleDeleteSelectedPlayes = (player) => {
    console.log(player, 'player');
    const filterPlayers=selectedPlayers.filter
  };
  return (
    <div>
      {selectedPlayers.map((player, ind) => {
        return (
          <div
            key={ind}
            className="flex items-center justify-between p-5 rounded-2xl border my-10 "
          >
            <div className="flex items-center gap-4">
              <img src={player.playerImg} alt="" className="w-20" />
              <div className="">
                <h2 className="flex gap-1 items-center text-xl font-bold">
                  <FaUser />
                  {player.playerName}
                </h2>
                <p className="font-semibold text-lg">{player.playerType}</p>
              </div>
            </div>
            <button
              onClick={() => handleDeleteSelectedPlayes(player)}
              className=" btn btn-circle cursor-pointer text-3xl font-bold text-red-500"
            >
              <MdDeleteForever />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
