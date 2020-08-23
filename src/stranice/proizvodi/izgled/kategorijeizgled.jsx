import React from 'react'
import {VentingSpecifikacije, RedNaslov, RedBlanko, Red1, Red2, Red3, Red4, Red41} from './specizgled'
import {IkoneUredjaja} from './ikoneizgled'

export const RacIzgledZidna = props => {
    return (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red2 rNaslov={'Ulazna snaga'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'W'} rJM2={'W'} v1={props.uSH} v2={props.uSG}/>
            <Red1 rNaslov={props.SEERT} v={props.SEER}/>
            <Red1 rNaslov={props.SCOPT} v={props.SCOP}/>
            <Red2 rNaslov={'Energetska klasa'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} v1={props.EKH} v2={props.EKG}/>
            <Red1 rNaslov={'Zvučni pritisak (S/H/M/L/Mute)'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Protok (Grejanje/Hlađenje)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'Stepen smanjenja vlage'} rJM={'l/h'} v={props.SSV}/>
            <Red2 rNaslov={'Radna jačina struje'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'A'} rJM2={'A'} v1={props.RJSH} v2={props.RJSG}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} poslednja={'poslednja'}/>
            <RedNaslov rNaslov={'SPOLJAŠNJA'} />
            <Red2 rNaslov={'Temperaturni opseg'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'<sup>o</sup>C'} rJM2={'<sup>o</sup>C'} v1={props.STEMPH} v2={props.STEMPG}/>
            <Red1 rNaslov={'Zvučni pritisak'} rJM={'dB(A)'} v={props.SZP}/>
            <Red1 rNaslov={'Protok'} rJM={'m<sup>3</sup>/h'} v={props.SPROTOK}/>
            <Red2 rNaslov={'Dimenzije cevi'} podNaslov1={'Maks. duž. freonske cevi'} podNaslov2={'Maks. visinska razlika'} rJM1={'m'} rJM2={'m'} v1={props.SDIMCEVF} v2={props.SDIMCEVV}/>
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red2 rNaslov={'Rashladno sredstvo'} podNaslov1={'Tip'} podNaslov2={'Punjenje'}  rJM2={'kg'} v1={props.SGAS} v2={props.SGASKOL}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.SDIMJ} v2={props.SDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.SNETBRU} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>)
}
export const RacIzgledProzorska = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'PROZORSKA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red2 rNaslov={'Ulazna snaga'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'W'} rJM2={'W'} v1={props.uSH} v2={props.uSG}/>
            <Red1 rNaslov={'Nominalna ulazna potrošnja'} rJM={'W'} v={props.NUS}/>
            <Red1 rNaslov={props.SEERT} v={props.SEER}/>
            <Red1 rNaslov={props.SCOPT} v={props.SCOP}/>
            <Red1 rNaslov={'Nivo buke unutra (Hi/Mi/Lo)'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Nivo buke spolja (Hi/Mi/Lo)'} rJM={'dB(A)'} v={props.NBS}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'Stepen smanjenja vlage'} rJM={'l/h'} v={props.SSV}/>
            <Red2 rNaslov={'Radna jačina struje'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'A'} rJM2={'A'} v1={props.RJSH} v2={props.RJSG}/>
            <Red1 rNaslov={'Nominalna struja'} rJM={'A'} v={props.NOMSTRUJA}/>
            <Red1 rNaslov={'Startna struja'} rJM={'A'} v={props.STARTSTRU}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU}/>
            <Red3 rNaslov={'Temperaturni opseg'} podNaslov1={'Unutrašnja strana'} podNaslov2={'Spolj. str. Grejanje'} podNaslov3={'Spolj. str. Hlađenje'} rJM1={'<sup>o</sup>C'} rJM2={'<sup>o</sup>C'} rJM3={'<sup>o</sup>C'} v1={props.UTEMPH} v2={props.STEMPH} v3={props.STEMPG}/>
            <Red2 rNaslov={'Rashladno sredstvo'} podNaslov1={'Tip'} podNaslov2={'Punjenje'}  rJM2={'kg'} v1={props.SGAS} v2={props.SGASKOL} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const MltIzgledZidna = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red2 rNaslov={'Ulazna snaga'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'W'} rJM2={'W'} v1={props.uSH} v2={props.uSG}/>
            <Red1 rNaslov={'Zvučni pritisak (Hi/Mi/Lo)'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Nivo buke'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red2 rNaslov={'Radna jačina struje'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'A'} rJM2={'A'} v1={props.RJSH} v2={props.RJSG}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const MltIzgledKaseta = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red1 rNaslov={'Zvučni pritisak (Hi/Mi/Lo)'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Nivo buke'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red1 rNaslov={'Kondez cev'} rJM={'mm'} v={props.KONDEZCEV}/>
            <Red4 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} podNaslov3={'Panel'} podNaslov4={'Panel Pakovanje'} rJM1={'mm'} rJM2={'mm'} rJM3={'mm'} rJM4={'mm'} v1={props.UDIMJ} v2={props.UDIMP} v3={props.UDIMPJ} v4={props.UDIMPP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red1 rNaslov={'Neto/Bruto masa panel'} rJM={'kg'} v={props.UPNETBRU} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const MltIzgledSpoljna = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'SPOLJAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red2 rNaslov={'Ulazna snaga'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'W'} rJM2={'W'} v1={props.uSH} v2={props.uSG}/>
            <Red1 rNaslov={'Maksimalna ulazna potrošnja'} rJM={'W'} v={props.NUS}/>
            <Red1 rNaslov={props.SEERT} v={props.SEER}/>
            <Red1 rNaslov={props.SCOPT} v={props.SCOP}/>
            <Red1 rNaslov={'Nivo buke'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Protok'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red2 rNaslov={'Radna jačina struje'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'A'} rJM2={'A'} v1={props.RJSH} v2={props.RJSG}/>
            <Red1 rNaslov={'Maksimalna ulazna struja'} rJM={'A'} v={props.NOMSTRUJA}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red1 rNaslov={'Napojni kabl'} rJM={'mm<sup>2</sup>'} v={props.NAPKABL}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.SNETBRU} />
            <Red2 rNaslov={'Temperaturni opseg'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'<sup>o</sup>C'} rJM2={'<sup>o</sup>C'} v1={props.STEMPH} v2={props.STEMPG}/>
            <Red2 rNaslov={'Dimenzije cevi'} podNaslov1={'Ukupna dužina cevovoda'} podNaslov2={'Dužina cev. po račvama'} rJM1={'m'} rJM2={'m'} v1={props.CEVDUZU} v2={props.CEVDUZRACVE}/>
            <Red2 rNaslov={'Maksimalna visinska razlika'} podNaslov1={'UN-UN'} podNaslov2={'UN-SP'} rJM1={'m'} rJM2={'m'} v1={props.UNUN} v2={props.UNSP}/>
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red2 rNaslov={'Rashladno sredstvo'} podNaslov1={'Tip'} podNaslov2={'Punjenje'}  rJM2={'kg'} v1={props.SGAS} v2={props.SGASKOL} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const CacIzgledKaseta = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red2 rNaslov={'Ulazna snaga'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'W'} rJM2={'W'} v1={props.uSH} v2={props.uSG}/>
            <Red1 rNaslov={props.SEERT} v={props.SEER}/>
            <Red1 rNaslov={props.SCOPT} v={props.SCOP}/>
            <Red2 rNaslov={'Energetska klasa'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} v1={props.EKH} v2={props.EKG}/>
            <Red1 rNaslov={'Zvučni pritisak (Hi/Mi/Lo)'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Nivo buke'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red2 rNaslov={'Radna jačina struje'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'A'} rJM2={'A'} v1={props.RJSH} v2={props.RJSG}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red1 rNaslov={'Kondez cev'} rJM={'mm'} v={props.KONDEZCEV}/>
            <Red4 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} podNaslov3={'Panel'} podNaslov4={'Panel Pakovanje'} rJM1={'mm'} rJM2={'mm'} rJM3={'mm'} rJM4={'mm'} v1={props.UDIMJ} v2={props.UDIMP} v3={props.UDIMPJ} v4={props.UDIMPP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red1 rNaslov={'Neto/Bruto masa panel'} rJM={'kg'} v={props.UPNETBRU} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const CacIzgledPP = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red1 rNaslov={props.SEERT} v={props.SEER}/>
            <Red1 rNaslov={props.SCOPT} v={props.SCOP}/>
            <Red2 rNaslov={'Energetska klasa'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} v1={props.EKH} v2={props.EKG}/>
            <Red1 rNaslov={'Nivo buke'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red1 rNaslov={'Kondez cev'} rJM={'mm'} v={props.KONDEZCEV}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} poslednja={'poslednja'} />
        </VentingSpecifikacije>
    </div>
)
export const CacIzgledSpoljna = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'SPOLJAŠNJA'} rUredjaj={props.Naziv}/>
            <Red1 rNaslov={'Maksimalna ulazna potrošnja'} rJM={'W'} v={props.MUP}/>
            <Red1 rNaslov={'Maksimalna ulazna struja'} rJM={'A'} v={props.MUS}/>
            <Red1 rNaslov={'Zvučni pritisak'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Nivo buke'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Protok'} rJM={'m<sup>3</sup>/h'} v={props.SPROTOK}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.SDIMJ} v2={props.SDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.SNETBRU}/>
            <Red2 rNaslov={'Temperaturni opseg'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'<sup>o</sup>C'} rJM2={'<sup>o</sup>C'} v1={props.STEMPH} v2={props.STEMPG}/>
            <Red2 rNaslov={'Dimenzije cevi'} podNaslov1={'Maks. duž. freonske cevi'} podNaslov2={'Maks. visinska razlika'} rJM1={'m'} rJM2={'m'} v1={props.SDIMCEVF} v2={props.SDIMCEVV}/>
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red2 rNaslov={'Rashladno sredstvo'} podNaslov1={'Tip'} podNaslov2={'Punjenje'}  rJM2={'kg'} v1={props.SGAS} v2={props.SGASKOL} poslednja={'poslednja'} />
        </VentingSpecifikacije>
    </div>
)
export const CacIzgledSpoljna2 = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'SPOLJAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red2 rNaslov={'Ulazna snaga'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'W'} rJM2={'W'} v1={props.uSH} v2={props.uSG}/>
            <Red1 rNaslov={props.SEERT} v={props.SEER}/>
            <Red1 rNaslov={props.SCOPT} v={props.SCOP}/>
            <Red1 rNaslov={'Maksimalna ulazna potrošnja'} rJM={'W'} v={props.MUP}/>
            <Red1 rNaslov={'Maksimalna ulazna struja'} rJM={'A'} v={props.MUS}/>
            <Red1 rNaslov={'Nivo buke'} rJM={'dB(A)'} v={props.NBU}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.SDIMJ} v2={props.SDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.SNETBRU}/>
            <Red2 rNaslov={'Rashladno sredstvo'} podNaslov1={'Tip'} podNaslov2={'Punjenje'}  rJM2={'kg'} v1={props.SGAS} v2={props.SGASKOL}  />
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red2 rNaslov={'Dimenzije cevi'} podNaslov1={'Maks. duž. freonske cevi'} podNaslov2={'Maks. visinska razlika'} rJM1={'m'} rJM2={'m'} v1={props.SDIMCEVF} v2={props.SDIMCEVV}/>
            <Red2 rNaslov={'Temperaturni opseg'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'<sup>o</sup>C'} rJM2={'<sup>o</sup>C'} v1={props.STEMPH} v2={props.STEMPG} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const CacIzgledKanalska = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red1 rNaslov={props.SEERT} v={props.SEER}/>
            <Red1 rNaslov={props.SCOPT} v={props.SCOP}/>
            <Red2 rNaslov={'Energetska klasa'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} v1={props.EKH} v2={props.EKG}/>
            <Red1 rNaslov={'Nivo buke'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red2 rNaslov={'ESP'} podNaslov1={'Ocenjeni pritisak'} podNaslov2={'Opseg'} rJM1={'Pa'} rJM2={'Pa'} v1={props.ESPOP} v2={props.ESPO}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red1 rNaslov={'Kondez cev'} rJM={'mm'} v={props.KONDEZCEV}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} poslednja={'poslednja'} />
        </VentingSpecifikacije>
    </div>
)
export const CacIzgledKanalska2 = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red4 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'BTU/h'} rJM2={'kW'} rJM3={'BTU/h'} rJM4={'kW'} v1={props.kHBTU} v2={props.kHKW} v3={props.kGBTU} v4={props.kGKW} />
            <Red1 rNaslov={'ESP'}  rJM={'Pa'} v={props.ESPOP} />
            <Red1 rNaslov={'Nivo buke (Hi/Mi/Lo)'} rJM={'dB(A)'} v={props.NBU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Tečnost'} podNaslov2={'Gas'} rJM1={'mm'} rJM2={'mm'} v1={props.SCVT} v2={props.SCVG}/>
            <Red2 rNaslov={'Temperaturni opseg'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'<sup>o</sup>C'} rJM2={'<sup>o</sup>C'} v1={props.UTEMPH} v2={props.UTEMPG} poslednja={'poslednja'} />
        </VentingSpecifikacije>
    </div>
)
export const VkIzgledPP = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red41 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} podNaslov3={'Grejanje 50/45<sup>o</sup>C'} podNaslov4={'Grejanje 60/50<sup>o</sup>C'} rJM1={'kW'} rJM2={'kW'} rJM3={'kW'} rJM4={'kW'} v1={props.kHKW} v2={props.kGKW} v3={props.kGKW5045} v4={props.kGKW6050} />
            <Red1 rNaslov={'Protok vode (Hlađenje)'} rJM={'l/h'} v={props.PROTOKVODE}/>
            <Red2 rNaslov={'Pad pritiska vode'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'kPa'} rJM2={'kPa'} v1={props.PPVH} v2={props.PPVG}/>
            <Red2 rNaslov={'Ventilator'} podNaslov1={'Tip'} podNaslov2={'Redova'}  v1={props.VENTT} v2={props.VENTR}/>
            <Red1 rNaslov={'Nivo zvučnog pritiska'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Ulaz/izlaz vode'} podNaslov2={'Kondez cev'} rJM1={'mm'} rJM2={'mm'} v1={props.ULAZIZLAZVODE} v2={props.KONDEZCEV} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const VkIzgledZidna = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red2 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'kW'} rJM2={'kW'}  v1={props.kHKW} v2={props.kGKW}  />
            <Red1 rNaslov={'Protok vode (Hlađenje)'} rJM={'l/h'} v={props.PROTOKVODE}/>
            <Red2 rNaslov={'Pad pritiska vode'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'kPa'} rJM2={'kPa'} v1={props.PPVH} v2={props.PPVG}/>
            <Red2 rNaslov={'Ventilator'} podNaslov1={'Tip'} podNaslov2={'Redova'}  v1={props.VENTT} v2={props.VENTR}/>
            <Red1 rNaslov={'Nivo zvučnog pritiska'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Ulaz/izlaz vode'} podNaslov2={'Kondez cev'} rJM1={'mm'} rJM2={'mm'} v1={props.ULAZIZLAZVODE} v2={props.KONDEZCEV} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const VkIzgledKanalska = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red41 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje 45/40<sup>o</sup>C'} podNaslov3={'Grejanje 50/45<sup>o</sup>C'} podNaslov4={'Grejanje 60/50<sup>o</sup>C'} rJM1={'kW'} rJM2={'kW'} rJM3={'kW'} rJM4={'kW'} v1={props.kHKW} v2={props.kGKW4540} v3={props.kGKW5045} v4={props.kGKW6050} />
            <Red1 rNaslov={'Protok vode (Hlađenje)'} rJM={'l/h'} v={props.PROTOKVODE}/>
            <Red2 rNaslov={'Pad pritiska vode'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'kPa'} rJM2={'kPa'} v1={props.PPVH} v2={props.PPVG}/>
            <Red2 rNaslov={'Ventilator'} podNaslov1={'Tip'} podNaslov2={'Redova'}  v1={props.VENTT} v2={props.VENTR}/>
            <Red1 rNaslov={'Nivo zvučnog pritiska'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'ESP (Hi/Mi/Lo)'}  rJM={'Pa'} v={props.ESPOP} />
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto / (Sa plenumom*) masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Ulaz/izlaz vode'} podNaslov2={'Kondez cev'} rJM1={'mm'} rJM2={'mm'} v1={props.ULAZIZLAZVODE} v2={props.KONDEZCEV} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const VkIzgledKaseta = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red3 rNaslov={'Kapacitet'} podNaslov1={'Hlađenje'}  podNaslov2={'Grejanje 50/45<sup>o</sup>C'} podNaslov3={'Grejanje 60/50<sup>o</sup>C'} rJM1={'kW'} rJM2={'kW'} rJM3={'kW'} v1={props.kHKW} v2={props.kGKW5045} v3={props.kGKW6050} />
            <Red1 rNaslov={'Protok vode (Hlađenje)'} rJM={'l/h'} v={props.PROTOKVODE}/>
            <Red2 rNaslov={'Pad pritiska vode'} podNaslov1={'Hlađenje'} podNaslov2={'Grejanje'} rJM1={'kPa'} rJM2={'kPa'} v1={props.PPVH} v2={props.PPVG}/>
            <Red2 rNaslov={'Ventilator'} podNaslov1={'Tip'} podNaslov2={'Redova'}  v1={props.VENTT} v2={props.VENTR}/>
            <Red1 rNaslov={'Nivo zvučnog pritiska'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red3 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'}  podNaslov3={'Panel Pak.'} rJM1={'mm'} rJM2={'mm'} rJM3={'mm'} v1={props.UDIMJ} v2={props.UDIMP} v3={props.UDIMPP}/>
            <Red1 rNaslov={'Neto masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red2 rNaslov={'Cevna veza'} podNaslov1={'Ulaz/izlaz vode'} podNaslov2={'Kondez cev'} rJM1={'mm'} rJM2={'mm'} v1={props.ULAZIZLAZVODE} v2={props.KONDEZCEV} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const RekuperatorIzgled = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'ESP (Hi/Mi/Lo)'}  rJM={'Pa'} v={props.ESPOP} />
            <Red1 rNaslov={'Temperaturna efikasnost (H/M/L)'}  rJM={'%'} v={props.TEPMEFF} />
            <Red2 rNaslov={'Entlpijska efikasnost (H/M/L)'} podNaslov1={'Grejanje'} podNaslov2={'Hlađenje'} rJM1={'%'} rJM2={'%'} v1={props.ENTEFFG} v2={props.ENTEFFH}/>
            <Red1 rNaslov={'Nivo zvučnog pritiska'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Ulazna snaga'} rJM={'W'} v={props.uSG}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red2 rNaslov={'Dimenzije (WxHxD)'} podNaslov1={'Jedinica'} podNaslov2={'Pakovanje'} rJM1={'mm'} rJM2={'mm'} v1={props.UDIMJ} v2={props.UDIMP}/>
            <Red1 rNaslov={'Neto/Bruto masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red1 rNaslov={'Daljinski upravljač'} v={props.Kontroler} poslednja={'poslednja'} />
        </VentingSpecifikacije>
    </div>
)
export const RekuperatorIzgled2 = props => (
    <div className="uredjaj">
        <IkoneUredjaja {...props}/>
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'UNUTRAŠNJA'} rUredjaj={props.Naziv}/>
            <Red1 rNaslov={'Protok (Hi/Mi/Lo)'} rJM={'m<sup>3</sup>/h'} v={props.UPROTOK}/>
            <Red1 rNaslov={'ESP (Hi/Mi/Lo)'}  rJM={'Pa'} v={props.ESPOP} />
            <Red1 rNaslov={'Temperaturna efikasnost (H/M/L)'}  rJM={'%'} v={props.TEPMEFF} />
            <Red2 rNaslov={'Entlpijska efikasnost (H/M/L)'} podNaslov1={'Grejanje'} podNaslov2={'Hlađenje'} rJM1={'%'} rJM2={'%'} v1={props.ENTEFFG} v2={props.ENTEFFH}/>
            <Red1 rNaslov={'Nivo zvučnog pritiska'} rJM={'dB(A)'} v={props.ZPU}/>
            <Red1 rNaslov={'Ulazna snaga'} rJM={'W'} v={props.uSG}/>
            <Red1 rNaslov={'Napajanje'} rJM={'V/Hz/Ph'} v={props.NAP}/>
            <Red1 rNaslov={'Dimenzije (WxHxD) Jedinica'}  rJM1={'mm'}  v={props.UDIMJ} />
            <Red1 rNaslov={'Neto masa'} rJM={'kg'} v={props.UNETBRU} />
            <Red1 rNaslov={'Napojni kabl'} rJM={'mm<sup>2</sup>'} v={props.NAPKABL}/>
            <Red2 rNaslov={'Upravljač'} podNaslov1={'Standardni'} podNaslov2={'(BMS) Modbus'}  v1={props.UPSTANDARD} v2={props.UPMODBUS}/>
            <Red1 rNaslov={'Bypass'}  v={props.BYPASS}/>
            <Red1 rNaslov={'Veličina kanala'}  v={props.DIMKANALA} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)
export const KondezPumpaIzgled = props => (
    <div className="uredjaj">
        <VentingSpecifikacije>
            <RedBlanko/>
            <RedNaslov rNaslov={'Model'} rUredjaj={props.Naziv}/>
            <Red1 rNaslov={'Voltaža'} rJM={'V/Hz/Ph'} v={props.KONDVOLTAZA}/>
            <Red2 rNaslov={'Maksimalna preporučena visina'} rJM1={'m'} rJM2={'ft'}  v1={props.KONDMPV1} v2={props.KONDMPV2}/>
            <Red2 rNaslov={'Protok'} rJM1={'l/h'} rJM2={'GPH'}  v1={props.KONDPROTOK1} v2={props.KONDPROTOK2}/>
            <Red1 rNaslov={'Kapacitet rezervoara'} rJM={'ml'} v={props.KONDKAPACITET}/>
            <Red2 rNaslov={'Mini split snage do'} rJM1={'kW'} rJM2={'BTU/h'}  v1={props.KONDMSDKW} v2={props.KONDMSDBTU}/>
            <Red1 rNaslov={'Nivo buke na 1m'} rJM={'dB(A)'} v={props.KONDBUKA}/>
            <Red1 rNaslov={'Temperatura'} rJM={'<sup>o</sup>C'} v={props.KONDTEMP}/>
            <Red1 rNaslov={'Snaga'} rJM={'W'} v={props.KONDSNAGA} poslednja={'poslednja'}/>
        </VentingSpecifikacije>
    </div>
)