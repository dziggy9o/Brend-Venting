import React, {useContext} from 'react'
import {PretragaUkljIsklj} from '../../../baza'
import * as i from '../../../komponente/svg'
import {VentingKatNav,VentingKatNavMob} from '../../../komponente/header/navigacija'

export const KatNavigacija = [
    {id: 1, naziv: 'Svi uređaji', aSkT: true, kategorija: '',lokacija: '/proizvodi', ikona: <i.SviUredjaji/> },
    {id: 2, naziv: 'Kućni klima uređaji', kategorija: 'rac', lokacija: '/proizvodi/rac', ikona: <i.Rac/> },
    {id: 3, naziv: 'Multi split', kategorija: 'multi', lokacija: '/proizvodi/multi', ikona: <i.Mlt/>},
    {id: 4, naziv: 'Komercijalni klima uređaji', kategorija: 'cac', lokacija: '/proizvodi/cac', ikona: <i.Cac/>},
    {id: 5, naziv: 'Vodeni konvektori', kategorija: 'vk', lokacija: '/proizvodi/vk', ikona: <i.Vk/>},
    {id: 6, naziv: 'Rekuperatori', kategorija: 'rekuperatori', lokacija: '/proizvodi/rekuperatori', ikona: <i.Rek/>},
    {id: 7, naziv: 'Kondez pumpe', kategorija: 'kondezpumpe', lokacija: '/proizvodi/kondezpumpe', ikona: <i.Kp/>}
]

export const Kategorije = props => {
    const [vpretraga] = useContext(PretragaUkljIsklj);
    const selektovanaPretraga = vpretraga ? 'odabrano' : '';
    return (
    <div className="katfilter">
        {KatNavigacija.map(x => (
                <VentingKatNav key={x.id} to={x.lokacija}  {...x}/>
        ))}
        <div className={selektovanaPretraga} onClick={props.izmena}>
             <i.PretIco/>
            <p>
            Pretraga
            </p>
        </div>
    </div>)
}
export const KategorijeMob = props => {
    const [vpretraga] = useContext(PretragaUkljIsklj);
    const selektovanaPretraga = vpretraga ? 'odabrano' : '';
    return (
    <React.Fragment>
    <div className="katfilterMob">
        <div onClick={props.izmenaKat}>
            <i.SviUredjaji/>
        </div>
        <div className={selektovanaPretraga} onClick={props.izmena}>
            <i.PretIco/>
        </div>
    </div>
    {props.KatOnOff ?
    <div className="odabirKatMob">
        <button onClick={props.izmenaKat}>x</button>
        <div className="centar">
         {KatNavigacija.map((x, i) => (
                <VentingKatNavMob key={x.id} to={x.lokacija} {...x}/>
        ))}</div> </div> : null}
    </React.Fragment>
)}