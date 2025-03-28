import classes from './styles.module.scss';
import { Link, Outlet } from 'react-router';
import jpg from '@/assets/photo.jpg';
import png from '@/assets/photo.png';
import Svg from '@/assets/photo.svg';
import { useState } from 'react';

export const App = function(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1 className={classes.test}>Обучение WebPack</h1>
            {__TEST__ ? 'УДАЧНО' : ''}
            <button onClick={()=>{throw new Error()}}>{count}</button>
            <div><img width={200} height={200} src={jpg} alt="jpg" /></div>
            <div><img width={200} height={200} src={png} alt="png" /></div>
            <Svg width={200} height={200} />
            <p><Link to="/about">About</Link></p>
            <p><Link to="/shop">Shop</Link></p>
            <Outlet/>
        </div>
    )
}