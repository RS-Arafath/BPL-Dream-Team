import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import Card from '../../../ui/Card';

const AvailaablePlayers = ({ players,setCoin,coin }) => {
  return (
    <div className=" mt-8 mx-auto containermt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  place-items-center ">
      {players.map((player) => {
        return (
         <Card player={player} setCoin={setCoin} coin={coin}></Card>
        );
      })}
    </div>
  );
};

export default AvailaablePlayers;
