import { useState } from "react";

function MapTheoObj(props){
    function renderDataBoject(){
        let {obj} = props;

        if(Object.keys(obj).length > 0){
            return Object.keys(obj).map((key, index)=>{
                return(
                    <li ley = {key}>
                        {obj[key]}
                    </li>
                )
            })
        }
    }
    return(
        <div>
            <p>MAP theo Object</p>
            <ul>
                {renderDataBoject()}
            </ul>
        </div>
    )
}export default MapTheoObj;