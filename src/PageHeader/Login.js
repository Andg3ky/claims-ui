
const Login = () => {

    return (
        <div>   
            <label for="username">Username : </label>
            <input type="text" placeholder="Enter Username" name="username" id="username" required />

            <label for="password">Password : </label>
            <input type="text" placeholder="Enter Password" name="password" id="password" required />

        </div> 
    )

}

export default Login;