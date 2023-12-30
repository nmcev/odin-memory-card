function GameOutCome({ isWin, handlePlayAgain }) {
    
    const rock = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmlqNnV5N2VpOW9sMncwNjRsYzA2NTFzMWEzdGt5bjlya2ttejB3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ju7l5y9osyymQ/giphy.gif";
    const star = "https://media1.giphy.com/media/tajVAagrp6tva/giphy.gif?cid=ecf05e4773hbhklkvkfo9ciz1tw8fiudpcnvgnfcz6mlxv6l&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    const url = isWin ? rock : star;

  return (
    <div className="w-full flex justify-center  flex-col items-center">
    <img src={url} alt={isWin ? "Winner 🏆!": "Looser!"} className="w-1/3" />
    <button onClick={handlePlayAgain} className="bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded mt-4 font-custom2">
      <>
         <b className='font-custom2'>{isWin ? "Winner 🏆!": "Looser!"}</b>
        <br />
        play again!
        </>
      </button>
      
    </div>
  );
} 

export default GameOutCome;