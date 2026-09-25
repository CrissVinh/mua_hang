function B2(props){
    const data = props.data;

    function renderData(){
        return data.map((item) =>{
            return(
                <div key = {item.id}>
                    <p>id: {item.id}</p>
                    <p>name: {item.name}</p>
                    <p>username: {item.username}</p>

                    <p>address: </p>
                        <p>street: {item.address.street}</p>
                        <p>suite: {item.address.suite}</p>
                    <p>phone: {item.phone}</p>
                    <p>website: {item.website}</p>

                    <p>company:</p>
                        <p>name: {item.company.name}</p>
                        <p>catchPhrase: {item.company.catchPhrase}</p>
                </div>
            )
        })
    }

    return(
        <div>
            <h2>BAI 31   bai 2</h2>
            {renderData()}
        </div>
    )
}export default B2;