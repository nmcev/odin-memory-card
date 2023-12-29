export default function ScoreBoard({score, bestScore}) {
    return (
        <div className=" w-60 h-28">
            <div className=" bg-gray-100 h-1/2 rounded-xl flex justify-center items-center opacity-65">
                <h2 className="text-xl text-stone-900 text-center font-custom2">
                    Score: {score} | Best Score: {bestScore}
                </h2>
            </div>
        </div>
    )
}