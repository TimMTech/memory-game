import Image from "../Image";

import "./gamepanel.css";

const GamePanel = ({ card, shuffledCards }) => {
  const shuffledArray = card.images.map((photo) => (
    <Image
      key={photo.id}
      id={photo.id}
      url={photo.image}
      onClick={() => shuffledCards(photo.id)}
    />
  ));

  return <div className="game-container">{shuffledArray}</div>;
};

export default GamePanel;
