import { Link } from "react-router-dom";
import SecondSubMenu from "./SecondSubMenu";
const SubMenu = ({ submenus, mainmenu }) => {
  return (
    <>
      <Link to={mainmenu.link}>{mainmenu.menu}</Link>
      
      <ul className="firstSubMenu">
      {
          
          submenus.map((submenu, index) => (
            // submenu[0].secondSubmenu     
  <li key={index} className="submenu-items">
    <Link to="#">{submenu.title}</Link>
  </li>
          ))
        }
        
        {
          submenus.secondSubmenu ? (
            <li>
              <SecondSubMenu secondmenu={submenus.secondSubmenu} submenu="hai" />
            </li>
          )
            : (
              submenus.map((submenu, index) => (
                <li key={index}>
                  <Link to="#">false</Link>
                </li>
              ))
            )
        }
      </ul>
    </>
  )
}
export default SubMenu;
// secondSubmenu