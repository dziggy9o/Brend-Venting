import React, {useContext} from 'react'
import {VentingContext} from '../../baza'
import {Switch, Route} from 'react-router-dom'
import {navigacija} from '../header/navigacija'
import {Uredjaj} from '../../stranice/proizvodi/izgled'
import * as str from '../../stranice'
import {HeaderBlanko} from '../header'

export const Rute = () => {
    const [uredjaji] = useContext(VentingContext);
    return (
        <Switch>
            <Route exact path='/'>
                <str.Pocetna/>
            </Route>
            {navigacija.map(x => (
                <Route key={x.id} exact path={x.lokacija}>
                    <HeaderBlanko />
                    {x.komponenta}
                </Route>
            ))}
            {str.KatNavigacija.map(x => (
                <Route key={x.id * 234} exact path={x.lokacija}>
                    <HeaderBlanko />
                    <str.Proizvodi kategorija={x.kategorija} />
                </Route>
            ))}
            {uredjaji.map(x => {
                return (
                    <Route key={x.ID * 99} exact path={`/proizvodi/${x.Kategorija}/${x.SLIKA1}`}>
                        <HeaderBlanko />
                        <Uredjaj {...x}/>
                    </Route>
                )
            })}  
        </Switch>
    )
}