import React, { use } from 'react';

const Players = ({ playersPromise }) => {
  const data=use(playersPromise)
  console.log(data);
  return (
    <div>
      <h1>{data.length}</h1>
    </div>
  )
};

export default Players;