import { Link } from "react-router-dom"
import './Homepage.css'
function Homepage(){
    const arrayofproduct=[
        {id:1,name:'product 1',color: '#FFDDC1'},
        {id:2,name:'product 2',color: '#FFABAB'},
        {id:3,name:'product 3',color: '#FFC3A0'},
        {id:4,name:'product 4', color: '#D5AAFF'},
        {id:5,name:'product 5', color: '#D1FAE5'},
        {id:6,name:'product 6' ,color: '#A5F3FC'},
        {id:7,name:'product 7', color: '#C4E4FF'},
        {id:8,name:'product 8', color: '#B9FBC0' },
    ]
    return(
        <div id="productwrapper">
        {arrayofproduct.map((product)=>{
            return(
                <Link key={product.id} to={`/Product/${product.id}`}style={{ textDecoration: 'none' }}>
                <div className="productbox" style={{ backgroundColor: product.color }}>
                    <label>{product.name} </label>
                </div>
             
                </Link>
                
                

            )

        })}
        </div>
    )

}
export default Homepage