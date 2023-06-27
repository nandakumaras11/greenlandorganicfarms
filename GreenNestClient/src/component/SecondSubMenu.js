import { Link } from "react-router-dom";
const SecondSubMenu=(secondmenu,submenulabel)=>{
return(
<>

<Link to={submenulabel.link}>{submenulabel.menu}</Link>
      <input type="checkbox" id="drop-1" />
<ul>
{
   secondmenu.map((menu, index) => (
    <li key={index} className="submenu-items">
      <Link to={menu.secondmenu}>hai</Link>
    </li>
  ))
}
  {/* <li><a href="#">HTML/CSS</a></li> */}
</ul>
</>
)
}
export default SecondSubMenu;


