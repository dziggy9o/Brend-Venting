import React, {useContext} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import * as str from '../../stranice'
import * as i from '../svg'
import * as CTX from '../../baza'


export const navigacija = [
    {id: 1, naziv: 'Proizvodi', lokacija: '/proizvodi', komponenta: <str.Proizvodi/>},
    {id: 2, naziv: 'Dokumentacija', lokacija: '/dokumentacija'},
    {id: 3, naziv: 'Brend', lokacija: '/brend'},
    {id: 4, naziv: 'Podrška', lokacija: '/podrska'},
    {id: 5, naziv: 'Prodajna mesta', lokacija: '/prodajnamesta'},
    {id: 6, naziv: 'Kontakt', lokacija: '/kontakt'}
]

export const Nav = () => {
        
        return (
        <div className={`navigacija`}>
            {navigacija.map(x => {
                return <VentingNavigacija key={x.id} to={x.lokacija} label={x.naziv}/>
            })}
        </div>)
    
}

export const VentingNavigacija = ({label, to, aSkT}) => {
    let match = useRouteMatch({
        path: to,
        exact: aSkT
    });
    return (
    <Link to={to}  className={match ? 'odabrano' : ''}>{label}</Link>
    )
}
export const VentingKatNav = ({naziv, ikona, to, aSkT}) => {
    let match = useRouteMatch({
        path: to,
        exact: aSkT
    });
    return (
    <Link to={to} className={match ? 'odabrano' : ''}>
        {ikona}
        <p>{naziv}</p>
    </Link>
    )
}
export const VentingKatNavMob = ({naziv, ikona, to, aSkT}) => {
    let match = useRouteMatch({
        path: to,
        exact: aSkT
    });
    return (
    <Link to={to} className={match ? 'odabrano' : ''}>
        <div className="box">
        {ikona}
        <p>{naziv}</p>
        </div>
    </Link>
    )
}
export const NavMobile = props => (
    <div className='navigacijaMob'>
        <button className={props.izgled} onClick={props.onClick}>
            <i.MobMenuIco/>
        </button>
    </div>
)

export const NavMobileSadrzaj = () => {
    const [mobNav, setmobNav] = useContext(CTX.MobNavContext);
    const prikaziSakri = () => {
        if(!mobNav) {
            document.body.classList.add('ventingMobNavigacija');
            setmobNav(!mobNav);
        }
        else {
            document.body.classList.remove('ventingMobNavigacija');
            setmobNav(!mobNav);
        }
    }

    return (
    <section className="vnavmobsadrzaj">
        <Link to='/'>
            <i.Logo/>
        </Link>
        <div className='mobLinkovi' onClick={prikaziSakri}>
        {navigacija.map(x => {
                return <VentingNavigacija key={x.id} to={x.lokacija} label={x.naziv}/>
            })}
        </div>
    </section>
    )
}