import { useParams } from "react-router-dom"
function Productpage(){
    const{id}=useParams()
    return(
        <h1>
            MY ID IS {id}
        </h1>
    )
}
export default Productpage