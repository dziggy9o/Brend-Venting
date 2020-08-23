import React, {useContext,useState,useEffect} from 'react'
import * as svg from '../svg'
import {Nav, NavMobile, NavMobileSadrzaj} from './navigacija'
import * as CTX from '../../baza'

import {Link} from 'react-router-dom'



export const Header = () => {
    const [mobNav, setmobNav] = useContext(CTX.MobNavContext);
    const [skrollKlasa, setSkrollKlasu] = useState('')
        useEffect(() => {
            window.addEventListener('scroll', () => {
                window.scrollY === 100px ? setSkrollKlasu('') : setSkrollKlasu('skroll')
            })
        })
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
    const MobNavUklj = mobNav ? 'odabrano' : ''
    return (
        <section className={`vh ${skrollKlasa}`}>
            <div className='vhs'>
            <Link to='/' className='plogo'>
             <svg.Logo/>
            </Link>
            <Nav/>
            <NavMobile izgled={MobNavUklj} onClick={prikaziSakri}/>
            </div>
        </section>
    )
};

export {NavMobileSadrzaj};

export const HeaderBlanko = () => (
    <section className="HeaderBlanko"/>
)
