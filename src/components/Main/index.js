import ScoreBoard from "../Scoreboard";
import GamePanel from "../GamePanel";
import { useEffect, useState } from "react";
import "./main.css";
import LevelMenu from "../LevelMenu";
import shuffleArray from "../../utils/handleShuffle";
import hardLevel from "../../utils/GameLevels/hardLevel";
import easyLevel from "../../utils/GameLevels/easyLevel";
import interLevel from "../../utils/GameLevels/interLevel";

const Main = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [randomImages, setRandomImages] = useState();
  const [clickedCard, setClickedCard] = useState([]);
  const [levelChosen, setLevelChosen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleGame = (id) => {
    const newState = shuffleArray(randomImages.images);
    setClickedCard((prevState) => prevState.concat(id));
    playRound(id);
    setRandomImages({ ...randomImages, images: [...newState] });
  };

  const playRound = (id) => {
    if (clickedCard.includes(id)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      if (newScore > bestScore) setBestScore(newScore);
      setCurrentScore(newScore);
      setClickedCard((prevState) => prevState.concat(id));
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedCard([]);
  };

  const handleEasy = () => {
    setRandomImages(easyLevel);
    setLevelChosen(true);
    setShowModal(false);
  };

  const handleInter = () => {
    setRandomImages(interLevel);
    setLevelChosen(true);
    setShowModal(false);
  };

  const handleHard = () => {
    setRandomImages(hardLevel);
    setLevelChosen(true);
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <div className="main-container">
        {showModal ? (
          <LevelMenu
            handleEasy={handleEasy}
            handleInter={handleInter}
            handleHard={handleHard}
          />
        ) : null}

        <ScoreBoard score={currentScore} bestScore={bestScore} />
      </div>
      <div className="game-panel">
        {levelChosen ? (
          <GamePanel shuffledCards={handleGame} card={randomImages} />
        ) : null}
      </div>
    </>
  );
};

export default Main;
