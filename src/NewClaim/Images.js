import './NewClaims.css'

const Images = () => {

    //images
    return(
        <div class="images">
            <div class="imagesize">
             <img src={require('./logo-propertyclaim.png')} alt="property"/>
            </div>
            <div class="imagesize">
             <img src={require('./logo-carclaim.png')} alt="motor"/>
            </div>
            <div class="imagesize">
             <img src={require('./logo-petsclaim.png')} alt="pet"/>
            </div>
        </div>
    )
}

export default Images;