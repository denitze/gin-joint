import { NavLink} from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav id="navBar">
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={{color: '#BB7043'}}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/entertainment" activeStyle={{color: '#BB7043'}}>ENTERTAINMENT</NavLink>
                </li>
                <li>
                    <NavLink to="/shop" activeStyle={{color: '#BB7043'}}>SHOP</NavLink>
                </li>
                <li>
                    <NavLink to="/events" activeStyle={{color: '#BB7043'}}>EVENTS</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeStyle={{color: '#BB7043'}}>CONTACT</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;