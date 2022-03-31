import "./scoreboard.css"

const ScoreBoard = ({score, bestScore}) => {
    return (
        <div className="score-container">
            <div className="current-score">
                Current Score: {score}
            </div>
            <div className="best-score">
                Best Score: {bestScore}
            </div>
        </div>
    )
}

export default ScoreBoard