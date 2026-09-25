import { useState } from "react";

function Shop(){

    // let , varr, const 

    // luu gia tri vao bienn state , dung dc trong 1 component 

    const [getItem, setItem] = useState(123)

    const [getItem1, setItem1] = useState(true)
    //        getItem doc gia tri cua useState
    //                  setItem thay doi gia tri cua getItem
    //                             useState tao 1 bien trang thai cho component

    function thaydoi(){
        setItem(456)
    }
    function thaydoi2(){
        setItem1(!getItem1)
    }
    
    // return se chaty lai khi useState thay doi , va goi gia tri moi xuong
    return(
        <div>
            <h1>hoc su kien: {getItem}</h1>
            <button onClick={thaydoi}>click</button>

            <p>thuat toan 3 ngoi: </p>
            {getItem1 == true ? "baovic" : "vinh"}

            <button onClick={thaydoi2}>click2</button>


        </div>
        
    );
}
export default Shop;