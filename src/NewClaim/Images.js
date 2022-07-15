import './NewClaims.css'

const Images = () => {

    //images
    return(
        <div className="images">
            <div className="imagesize">
             <img src={require('./logo-propertyclaim.png')} alt="property"/>
            </div>
            <div className="imagesize">
             <img src={require('./logo-carclaim.png')} alt="motor"/>
            </div>
            <div className="imagesize">
             <img src={require('./logo-petsclaim.png')} alt="pet"/>
            </div>
        </div>
    )
}

export default Images;