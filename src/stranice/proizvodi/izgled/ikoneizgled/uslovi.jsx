import React from 'react'
import * as i from './listaikona'

export const IkoneUredjaja = props => (
    <React.Fragment>
        {props.Ikone === 'v1' ? <div className='ikone'>{i.VACCSHD.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v2' || props.Ikone === 'v3' || props.Ikone === 'v9' ? <div className='ikone'>{i.VSAFINVONOFF.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'V4' ? <div className='ikone'>{i.VSSNTR.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v5' ? <div className='ikone'>{i.VSSNG.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v6' ? <div className='ikone'>{i.VACPLUS.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v7' ? <div className='ikone'>{i.VACONFF.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v8' ? <div className='ikone'>{i.WFMWHM.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v10' ? <div className='ikone'>{i.VCA3MLT.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v11' ? <div className='ikone'>{i.VTMLT.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v12' ? <div className='ikone'>{i.VCDCAC.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v13' ? <div className='ikone'>{i.VUECAC.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v15' ? <div className='ikone'>{i.VTBVHDCAC.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v16' ? <div className='ikone'>{i.ARVHDCAC.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
        {props.Ikone === 'v18' ? <div className='ikone'>{i.VTICAC.map(x => {return <IkoneIzgled {...x}/> })}</div> : null}
    </React.Fragment>
)

const IkoneIzgled = props => (
    <div className='ikonica'>
        <img src={`/imgs/ikone/${props.slika}.svg`} alt='Venting Ikona'/>
        <span className='tekstikonice' dangerouslySetInnerHTML={{__html: props.tekst}}/>
    </div>
)