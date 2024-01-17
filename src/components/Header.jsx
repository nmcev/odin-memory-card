import ScoreBoard from "./Scoreboard";
import PropTypes from 'prop-types';

let body = document.querySelector('body');

function Header({isLoading, score, highScore, userOS}) {
    
    return (
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
    )
}

Header.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired,
    userOS : PropTypes.string.isRequired,
}

export default Header;