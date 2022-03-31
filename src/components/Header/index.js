import "./header.css"
import logo from "../../images/overwatchlogo.png"

const Header = () => {
    return (
        <div className="header-container">
            <img className="logo" src={logo} alt="OW Logo" />
            <h1>Memory Game</h1>
        </div>
    )
}

export default Header