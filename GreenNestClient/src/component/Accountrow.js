import { Link } from "react-router-dom";
const Accountrow=(props)=>{
    return (
       
        <Link to={props.link}className="single-row">
<div className="row">
<div className="left-side">
<i className="fa fa-phone   icons" aria-hidden="true"></i>
</div>
<div className="center-side"> 
<div className="title">{props.title}</div>
<div className="sub-tittle">
{props.subtittle}
</div>
</div>
<div className="right-side">
<i className="fa fa-angle-right icons" aria-hidden="true"></i>
</div>
</div> 
</Link>   
    )
}
export default Accountrow;