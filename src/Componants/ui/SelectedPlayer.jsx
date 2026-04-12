import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
const SelectedPlayer = ({ player, handleDeleteSelectedPlayes }) => {
  return (
    <div className="flex items-center justify-between p-5 rounded-2xl border my-10 ">
      <div className="flex items-center gap-4">
        <img src={player.playerImg} alt="player_img" className="w-20" />
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
};

export default SelectedPlayer;