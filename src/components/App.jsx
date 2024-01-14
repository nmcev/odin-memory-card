import {useEffect, useState } from 'react';
import fetchFromAPI from '../API/fetchFromAPI';
import LoadingAnimation from './Loading';
import Card from './Card'
import ScoreBoard from './Scoreboard';
import GameOutCome from './GameOutCome';
import Footer from './Footer';
import rockRoll from '../assets/sounds/rock.mp3'
import yodaSound from '../assets/sounds/yoda.mp3'

function App() {
  const [imageURLS, setImageURLS] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [isWinner, setIsWinner] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  
  useEffect(() => { 
  const fetchDataAndShuffle = async () => {
    try {
      const data = await fetchFromAPI();
      setImageURLS(shuffleImages(data));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchDataAndShuffle();
  
}, []);

  useEffect(() => { 
    const audio = new Audio(rockRoll)
    const audio2 = new Audio(yodaSound)


    if (isWinner === true) {
      audio.play();
      audio.loop = true;
  
    } else if (isWinner === false) {
      audio2.play()
    } 

    return () => {
      audio.pause();
      audio2.pause();
    }
  }, [isWinner]);

  function shuffleImages(images) {
    return images.sort(() => Math.random() - 0.5);
  }

  const handleImageClick = (e) => {
    const name = e.target.alt;

    if (clicked.includes(name)) {
      setScore(0);
      setClicked([]);
      setHighScore(score >= highScore ? score : highScore);

      setIsWinner(false);
      return;
    }

    setScore(score + 1);

    if (score === imageURLS.length - 1) {
      setHighScore(score >= highScore ? score + 1 : highScore);
      setScore(0);
      setIsWinner(true);
    }

    setClicked([...clicked, name]);
    setImageURLS(shuffleImages(imageURLS));
  };

  const handlePlayAgain = async () => {
    setImageURLS([]);
    setScore(0);
    setClicked([]);
    setIsWinner(null);

    setIsLoading(true); 
    try {
      const data = await fetchFromAPI();
      setImageURLS(shuffleImages(data));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  
  const getOperatingSystem = () => {
    const userAgent = window.navigator.userAgent;

    if (userAgent.includes('Windows')) {
      return 'windows';
    } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS')) {
      return 'Mac OS';
    } else if (userAgent.includes('Linux')) {
      return 'Linux';
    } else {
      return 'Unknown';
    }
  };

  let body = document.querySelector('body');
  let root = document.querySelector('#root');
  const userOS = getOperatingSystem();

  if (userOS === 'windows') {
    root.style.height = '125vh'
  } else if (userOS === 'Mac OS') {
    root.style.height = '125vh'
  } else if (userOS === 'Linux') {
    root.style.height = '100vh'
  }
  return (
    <>
      
      <div className=' w-full flex flex-col lg:flex-row  lg:justify-center lg:items-center pt-4 pb-4'>
         <div className='order-2 lg:order-1 text-center'>
            <h1 className='text-3xl text-gray-100 font-custom pt-4'>Star Wars Memory Cards</h1>
            <h2 className='text-xl text-gray-100 font-custom2 font-bold pt-2'>Click on an image to earn points, but don&#39;t click on any more than once!</h2>
         </div>
  
        <div className='order-1 lg:order-2'>
          {!isLoading && (
            body.style.overflowY = userOS === 'windows' || userOS === 'Mac OS' ? 'scroll' : 'hidden',
            body.style.overflowX = 'hidden',
         <ScoreBoard score={score} bestScore={highScore} />)}
            </div>
     </div>



       {imageURLS.length > 0 && isWinner === null &&   (
        <main className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8
        ${userOS === "windows" || userOS === "Mac OS" ? "pb-12" : "pb-1"}
        `}
        >
         {imageURLS.map((image, i) => (
           <article onClick={handleImageClick} key={i} className="w-full cursor-pointer">
              <Card name={image.name} imgURL={image.url} />
             </article>
           ))}
        </main>
        )}

      {isLoading && (
        body.style.overflowY = userOS === 'windows' || userOS === 'Mac OS' || userOS === 'Linux' ? 'hidden' : 'scroll',
        < LoadingAnimation />
        )}


      {(isWinner === true || isWinner === false) && (
        <GameOutCome isWin={isWinner} handlePlayAgain={handlePlayAgain} />
      )}


      <footer className=" bg-slate-600 w-full flex fixed justify-center items-center bottom-0  gap-1">
        <Footer />
      </footer>

      
    </>
)

}

export default App
