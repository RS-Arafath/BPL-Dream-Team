import { Suspense, useState } from 'react';
import './App.css';
import Banner from './Componants/HomePage/banner/Banner';
import Navbar from './Componants/NavBar/Navbar';
import Players from './Componants/players/Players';
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async () => {
  const res = await fetch('playersData.json');
  return res.json();
};
function App() {
  const playersPromise = fetchPlayer();

  // nav coin managment

  const [coin, setCoin] = useState(15370000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex flex-row justify-center items-center m-20">
            <span className=" loading loading-dots loading-lg"></span>
          </div>
        }
      >
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
       
      />
    </>
  );
}

export default App;
