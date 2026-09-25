import { useState } from "react";

function Warning(props){
    if(!props.warning){
        return(
            <div>
                {props.children}        {/* lay phan noi dung trong component khi goi component do */}
            </div>
        )
    }
    return(
        <div>
            Warning! {props.children}
        </div>
    )
}
function Login2(){
    const [showWarning, setShowWarning] = useState(true)     /*  [gia tri hien tai,  ham thay doi gia tri]  */

    function hanldeToogleClick(){
        setShowWarning(!showWarning)
    }
    return(
        <div>
            <Warning warning = {showWarning}>
                Warning
                
                <button onClick={hanldeToogleClick}>

                    {showWarning ? "Hide" : "Show"}

                </button>
            </Warning>
        </div>
        
    );

}export default Login2;