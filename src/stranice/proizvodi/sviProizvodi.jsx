import React, {useContext, useState} from 'react'
import * as CTX from '../../baza'
import {ProizvodLS} from './izgled'
import {Paginacija} from './paginacija'
import {FilterUredjaja} from './filter'

export const Proizvodi = props => {
    const [uredjaji] = useContext(CTX.VentingContext);
    const [trenutnaStrana, postaviTrenutnuStranu] = useContext(CTX.TrenutnaStrContext);
    const [uredjajiPoStrani] = useContext(CTX.UredjajiPoStrContext);
    const [pretragaUredjaja, pretraziUredjaje] = useContext(CTX.PretragaUredjajaContext);
    const [KatOnOff, setKatOnOff] = useState(false);
    
    let filterPoKategoriji = uredjaji.filter(x => (x.Kategorija.match(props.kategorija)));
    let filterPoPretrazi = uredjaji.filter(x => (x.SLIKA1.toLowerCase().match(pretragaUredjaja.toLowerCase())))
    const indexPoslednjegUredjaja = trenutnaStrana * uredjajiPoStrani;
    const indexPrvogUredjaja = indexPoslednjegUredjaja - uredjajiPoStrani;
    const trenutniUredjaji = pretragaUredjaja.length > 0 ? filterPoPretrazi.slice(indexPrvogUredjaja, indexPoslednjegUredjaja) : filterPoKategoriji.slice(indexPrvogUredjaja, indexPoslednjegUredjaja);
    const odaberiStranu = (brojStrane) => postaviTrenutnuStranu(brojStrane);
    
    let filterSlova = new RegExp(/\?|&|\(|\)|\*|{|}|\[|]|/g);
    let brojUkpnoFiltriranihUredjaja = pretragaUredjaja.length > 0 ? filterPoPretrazi.length : filterPoKategoriji.length;
    const ukljIskljKat = () => {setKatOnOff(!KatOnOff)}
    return (
        <section className="proizvodi">
            <FilterUredjaja KatOnOff={KatOnOff} izmenaKat={ukljIskljKat}  value={pretragaUredjaja} onChange={e => pretraziUredjaje(e.target.value.replace(filterSlova, ''))}/>
            {trenutniUredjaji.map(x => {
                return (
                        <ProizvodLS key={x.ID}{...x} to={`/proizvodi/${x.Kategorija}/${x.SLIKA1}`}/>
                )
            })}
            <Paginacija uredjajiPoStrani={uredjajiPoStrani} trenutnaStrana={trenutnaStrana} ukupnoUredjaja={brojUkpnoFiltriranihUredjaja} odaberiStranu={odaberiStranu}/>
        </section>
    )
}
