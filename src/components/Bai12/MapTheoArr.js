function MapTheoArr(props){
    function renderData(){
        let {arr} = props;

        if(arr.length > 0){
            return arr.map ((value, key) => {
                return(
                    //key danh dau so thu tu de cac the khoi trung nhau
                    <li key = {key}>
                        {value}
                    </li>
                )
            })
        }
    }
    return(
        // hien thi html thoi
        <div>
            <p>MAp theo Array</p>
            <ul>
                {renderData()}
            </ul>
        </div>
    )
}export default MapTheoArr;