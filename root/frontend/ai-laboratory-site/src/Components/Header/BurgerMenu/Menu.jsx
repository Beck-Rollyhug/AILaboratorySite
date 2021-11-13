import React from "react";
import '../../../App.css';
import n from "./Menu.module.css"
import "./Menu.module.css"

const Menu = ({header, items, active, setActive}) => {
    return(
        <div className={active ? n.active : n.menu } onClick={() => setActive(false)}>
            <div className={n.menuContext} onClick={e => e.stopPropagation()}>
                {/*<div ClassName={n.menuHeader}>{header}</div>*/}
                <ul>
                    {items.map((item =>
                    <li>
                        <a href={item.href}>{item.value}</a>
                        <span className={n.icons}>{item.icon}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Menu;