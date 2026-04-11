import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChosePlayer = () => {
    if (coin >= player.price) {
      setCoin((prevCoin) => prevCoin - player.price); // safe subtraction
    } else {
      alert(`Balance low: ${coin} You didn't Buy Players`);
      return;
    }
    alert(`${player.playerName} is Selected`);
    setIsSelected('true');
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="container mx-auto">
      <div className="card  bg-base-100  shadow-sm">
        <figure>
          <img className="h-87.5 w-full" src={player.playerImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[22px]">
            <FaUser />
            {player.playerName}
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center font-lg">
              <FaFlag />
              <p className="font-semibold text-lg">{player.playerCountry}</p>
            </div>
            <button className="btn btn-outline">{player.playerType} </button>
          </div>
          <div className="divider mb-0 mt-0"></div>
          <h2 className="font-bold text-xl">
            Rating: <span className="text-red-700">{player.rating}</span>
          </h2>

          <strong>
            {' '}
            <small>Style</small>
          </strong>

          <div className="w-full flex  justify-between font-semibold border px-3 py-2 rounded-lg">
            <p className="">{player.battingStyle}</p>
            <p className="text-right">{player.bowlingStyle}</p>
          </div>

          <div className="card-actions justify-between mt-3">
            <p className="font-bold text-lg">Price: {player.price}</p>

            <button
              className="btn  btn-success text-black btn-outline font-bold"
              onClick={handleChosePlayer}
              disabled={isSelected}
            >
              {isSelected ? 'Selected' : 'Choose Player'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
