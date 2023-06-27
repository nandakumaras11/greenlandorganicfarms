
import { Link } from "react-router-dom";
import Accountrow from "../component/Accountrow" 
const Account=()=>{
return(
    <>
<h3 className="headding">Hi,Gust</h3>
<p className="headding"><small>Please <Link to="/Login" className="main-txt">Login</Link> to enjoy your shopping</small></p>
<Accountrow link="/contactus" title="Contact" subtittle="Help regarding your recent purchase"/>
<Accountrow link="/Login" title="Login" subtittle="Help regarding your recent purchase"/>
</>
)
}
export default Account;