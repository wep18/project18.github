import {Link} from 'react-router-dom';
const ButtonLetsStart = () =>{
    return(
        <>
        <button type="button" className="btn btn-primary btn-lg active" data-bs-toggle="button" aria-pressed="true">
            <Link to='/celebration' style={{textDecoration:'none', color:'white'}}>Let's Start</Link></button>
        </>
    )
}
export default ButtonLetsStart;