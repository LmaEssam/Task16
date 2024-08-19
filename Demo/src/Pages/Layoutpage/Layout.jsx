import { Link, Outlet } from 'react-router-dom'
function Layoutpage(){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Homepage</Link>
                </li>
                <li>
                    <Link to='/Aboutpage'>Aboutpage</Link>
                </li>
                <li>
                    <Link to='/Menpage'>Menpage</Link>
                </li>
                <li>
                    <Link to='/Womenpage'>Womenpage</Link>
                </li>
            </ul>
        </nav>
                <Outlet />
           
        </>
    )

}
export default Layoutpage