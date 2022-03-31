import "./image.css"

const Image = ({url, id, onClick}) => {
    return (
        <img 
            id={id}
            className="image"
            src={url}
            alt=" " 
            onClick={onClick}
            
        />
    )
}

export default Image