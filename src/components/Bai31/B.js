function B(props){
    const data = props.data;

    function renderData(){
        return data.map((item) =>{
            return(
                <li key = {item.id}>
                    <p>ID: {item.id}</p>
                    <p>name: {item.name}</p>
                    <p>username: {item.username}</p>
                    <p>email: {item.email}</p>
                    <p>address</p>
                    <p>     + street: {item.address.street}</p>
                    <p>     + suite: {item.address.suite}</p>

                    <p>phone: {item.phone}</p>
                    <p>website: {item.website}</p>
                    <p>company: </p>
                    <p>     + name: {item.company.name}</p>
                    <p>     + catchPhrase: {item.company.catchPhrase}</p>
                    <br/>
                </li>
            )
        })
    }

    return(
        <div>
            <h2>Bai 1 Array - Object</h2>

            <ul>
                {renderData()}
            </ul>
        </div>
    )
}export default B;