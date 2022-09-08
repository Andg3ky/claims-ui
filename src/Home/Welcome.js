import './Home.css'

const Welcome = () => {

    return( <div className="welcomeBox">
        <h1 data-testid="h1" className="welcome">Welcome</h1>
        <p className="par">
        <strong>Direct Claims, voted the best new small claims online website 
          for Property, Motor and Pet claims.</strong>
          <br></br>
          <br></br>
        <strong>Do you need to make a new claim under $500? 
            Do you have questions? You’re in the right place.
            Submit your claim now with Direct Claims.
        </strong>
        <br></br>
        <br></br>
        <strong>To submit a new claim, please go to the New Claim tab.</strong>
        <br></br>
        <strong>To view claims, please go to the View Claims tab.</strong>
        <br></br>
        <strong>To search claims, please go to the Search Claims tab.</strong>
        <br></br>
        <strong>To Login, please go to the Login tab.</strong>
        </p>
    </div>

    )
}

export default Welcome;