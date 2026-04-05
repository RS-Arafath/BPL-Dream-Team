import { Suspense } from 'react';
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

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-lg"></span>}
      >
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
