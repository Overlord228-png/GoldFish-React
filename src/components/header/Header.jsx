import React, {NavLink} from "react-router-dom";
import "./style.css"
import HeaderLogo from "../../img/HeaerLogo.svg"
import Phone from "../../img/Phone.svg"
import User from "../../img/User.svg"
import Buy from "../../img/Buy.svg"

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={HeaderLogo} alt=""/>
            <ul className="">
                <li className="">
                    <NavLink to="/input" className="">
                        <input type="" name="" value="Найти игру" />
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/phone" className="nav__item">
                    <img className="icon " src={Phone} alt=""/>
                        <p className="phone__number">
                            +7 (495) 911-10-11
                        </p>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink>
                        <img className="icon" src={User} alt=""/>
                        <img className="icon" src={Buy} alt=""/>
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}
 
export default Header;