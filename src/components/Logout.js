import { Link, useNavigate } from "react-router-dom";

const Logout = (props) => {

    let navigate = useNavigate();

    const handleClick = () => {
        console.log("logout")
        props.defineUser(undefined)
        navigate("/", { replace: true })
    }

    return <input type={"button"} value="Logout" onClick={handleClick}/>
}

export default Logout