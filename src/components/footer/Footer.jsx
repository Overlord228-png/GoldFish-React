import React from "react";
import "./style.css"
import HeaderLogo from "../../img/HeaerLogo.svg"
import Instagram from "../../img/instagram.png"
import Vk from "../../img/vk.png"
import Facebook from "../../img/fb.png"

const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <img className="" src={HeaderLogo} alt=""/>
                    <p>
                        г. Москва ст.м. Таганская Малый Дровяной переулок 6
                    </p>
                </div>
                <div>
                    <button type="">
                        Заказать звонок
                    </button>
                    <div>
                        <p>
                            +7 (495) 911-10-11
                        </p>
                        <p>
                            msk@magicgoldfish.ru
                        </p>
                    </div>
                    <div>
                        <img className="" src={Instagram} alt="Instagram"/>
                        <img className="" src={Vk} alt="Vk"/>
                        <img className="" src={Facebook} alt="Facebook"/>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;