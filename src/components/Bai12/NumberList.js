const numbers = [1,2,3,4,5];
<NumberList numbers = {numbers} />

function NumberList(props){
    const numbers = props.numbers;

    function listItems(){
        return numbers.map((number) => {
            return(
                <li key = {numbers.toString()}>
                    {number}
                </li>
            )
        })
    }


    return(
        <ul>
            {listItems()}
        </ul>
    )
}export default NumberList;