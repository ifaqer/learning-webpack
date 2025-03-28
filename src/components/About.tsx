import { Link } from "react-router"
export default function About(){
    return(
        <div>
            <h1>About...</h1>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/shop">Shop</Link></p>
        </div>
    )
}