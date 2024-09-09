import {NavStyle} from '../css/NavStyle'
import { Link } from 'react-router-dom'

const Nav =()=>{
    return(
        <NavStyle>

               <Link to='/'>Home</Link>
            <Link to='/Login'>Login</Link>
        
        </NavStyle>
    )
}
export default Nav