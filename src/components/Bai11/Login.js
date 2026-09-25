import { useState } from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function Login(){


    const [isToogle, setisToogle ] = useState(false)

    function hanldeLoginClick(){
        setisToogle(!isToogle)
    }
    const hanldeLogoutClick = () => {
        setisToogle(!isToogle)
    }

    function renderButton(){
        let button;
        if(isToogle){
            button = <LogoutButton onClick = {hanldeLogoutClick} />
        }else{
            button = <LoginButton onClick = {hanldeLoginClick} />
        }
        return button;
    }
    return(
        <div>
            {renderButton()}
        </div>
    )
}export default Login;