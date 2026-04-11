import { Suspense, useState } from 'react';
import './App.css';
import Banner from './Componants/HomePage/banner/Banner';
import Navbar from './Componants/NavBar/Navbar';
import Players from './Componants/players/Players';

const fetchPlayer = async () => {
  const res = await fetch('playersData.json');
  return res.json();
};
function App() {
  const playersPromise = fetchPlayer();

  // nav coin managment

  const [coin, setCoin] = useState(18700000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className='flex flex-row justify-center items-center m-20'>
            <span className=" loading loading-dots loading-lg"></span>
          </div>
        }
      >
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  );
}

export default App;
