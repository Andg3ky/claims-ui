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
        <strong>Before you make a claim, select the relevant product below to see what information we’ll need from you and the best way to contact us.
        To report a new claim, call our 24-Hour reporting line and if you wish to discuss a pending claim, our team are available 9am-5pm Monday to Friday.
        </strong>
        </p>
    </div>

    )
}

export default Welcome;