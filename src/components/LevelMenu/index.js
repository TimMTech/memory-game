import "./levelmenu.css"

const LevelMenu = ({handleEasy, handleInter, handleHard}) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-container">
            <h1>Choose Your Level</h1>
            <button className="btn" onClick={handleEasy}>
              Easy Mode
            </button>
            <button className="btn" onClick={handleInter}>
              Intermediate Mode
            </button>
            <button className="btn" onClick={handleHard}>
              Hard Mode
            </button>
          </div>
        </div>
      </div>
    );
}

export default LevelMenu