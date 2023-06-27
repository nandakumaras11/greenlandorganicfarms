import { Link } from "react-router-dom"
import SubMenu from "./SubMenu"
import { useState } from "react";
export default function MenuItems({ singleMenu }) {
    return (
        <>
            {
                singleMenu.submenu ?
                    (
                        <>
                            <li>
                                <SubMenu mainmenu={singleMenu} submenus={singleMenu.submenu} />
                            </li>
                        </>
                    )
                    : (
                        <>
                            <li className="mainMenuLi"><Link to={singleMenu.link}>{singleMenu.menu}</Link></li>
                        </>)
            }
        </>
    )

}