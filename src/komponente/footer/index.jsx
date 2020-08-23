import React from 'react'
import * as svg from '../svg'
import {Link} from 'react-router-dom'

export const Futer = () => {
    return (
        <section className='vf'>
            <div className='vfs'>
                <FuterKontakt/>
                <FuterInfo/>
            </div>
        </section>
    )
};

export const FuterKontakt = () => (
    <div className='vf-kontakt'>
        <p>
            Više načina kupovine: <Link to='/prodajnamesta'>Prodajna mesta</Link> ili pozivom na broj <a href='Tel:0381113757555'>+ 381 11 37 57 555</a>
        </p>
    </div>
)
export const FuterInfo = () => {
    let datum = new Date();
    let trenutnaGodina = datum.getFullYear();
    return (
        <div className="vf-informacije">
            <div className="linkovi" >
                <Link to='/privatnost'>
                Pravila o privatnosti
                </Link>
                /
                <Link to='/uslovi'>
                Uslovi korišćenja
                </Link>
                /
                <Link to='/mapasajta'>
                Mapa sajta
                </Link>
            </div>
            <p>
                Copyright &copy; {trenutnaGodina} <svg.Logo/>. Sva prava zadržana. Dev. by <a href='https://fb.com/dziggy' target='_blank' rel="noopener noreferrer"><svg.Ir/></a>
            </p>
        </div>
    )
}