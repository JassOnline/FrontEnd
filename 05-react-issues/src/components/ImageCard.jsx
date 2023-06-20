const ImageCard = ({id, title}) => {
    return (
      <div className="image-container">
          <img src={id} alt = {title} className="image-view"/>
      </div>
    )
  }
  
  export default ImageCard