import { Link } from "react-router";
export default function Shop(){
    function buy():void{
        console.log('Buy...')
    }
    return(
        <div>
            <h1>Shop...</h1>
            <p>Тестовый магазин для webpack</p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/shop">Shop</Link></p>
        </div>
    )
}