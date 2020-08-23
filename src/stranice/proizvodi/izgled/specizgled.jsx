import React from 'react'

export const VentingSpecifikacije = props => (
    <div className='tabela'>
    <table>
        <tbody>
            {props.children}
        </tbody>
    </table>
    </div>
)
export const RedNaslov = props => (
    <tr className='naslov'>
        <td colSpan='3' style={{textAlign: 'center', fontWeight: 'bold'}}> 
            {props.rNaslov}
        </td>
        <td>
            {props.rUredjaj}
        </td>
    </tr>
)
export const RedBlanko = () => (
    <tr className='crvena'>
        <td colSpan='4'/>           
    </tr>
)
export const Red1 = props => (
    <tr>
        <td className={`tamna donjiBorder levo5 ${props.poslednja}`} colSpan='2'>
            {props.rNaslov}
        </td>
        <td className={`tamna donjiBorder ${props.poslednja}`} dangerouslySetInnerHTML={{__html: props.rJM}}/>
        <td className={`${props.poslednja}`}>
            {props.v}
        </td>
    </tr>
)
export const Red2 = props => (
    <React.Fragment>
    <tr>
        <td rowSpan='2' className={`tamna donjiBorder levo5 ${props.poslednja}`}>
            {props.rNaslov}
        </td>
        <td className='tamna donjiBorder levo5'>
            {props.podNaslov1}
        </td>
        <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM1}}/>
        <td>
        {props.v1}
        </td>
    </tr>
    <tr>
        <td className={`tamna donjiBorder levo5 ${props.poslednja}`}>
            {props.podNaslov2}
        </td>
        <td className={`tamna donjiBorder ${props.poslednja}`} dangerouslySetInnerHTML={{__html: props.rJM2}}/>
        <td className={`${props.poslednja}`}>
        {props.v2}
        </td>
    </tr>
    </React.Fragment>
)
export const Red3 = props => (
    <React.Fragment>
        <tr>
            <td rowSpan='3' className={`tamna donjiBorder duz15 levo5 ${props.poslednja}`}>
                {props.rNaslov}
            </td>
            <td className='tamna donjiBorder duz10 levo5' dangerouslySetInnerHTML={{__html: props.podNaslov1}}/>
            <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM1}}/>
            <td>
                {props.v1}
            </td>
        </tr>
        <tr>
            <td className='tamna donjiBorder duz10 levo5' dangerouslySetInnerHTML={{__html: props.podNaslov2}}/> 
            <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM2}}/>
            <td>
                {props.v2}
            </td>
        </tr>
        <tr className='donjiBorder'>
            <td className='tamna donjiBorder duz10 levo5' dangerouslySetInnerHTML={{__html: props.podNaslov3}}/>
            <td className={`tamna donjiBorder ${props.poslednja}`} dangerouslySetInnerHTML={{__html: props.rJM3}}/>
            <td className={`${props.poslednja}`}>
                {props.v3}
            </td>
        </tr>
    </React.Fragment>
)
export const Red4 = props => (
    <React.Fragment>
        <tr>
            <td rowSpan='4' className={`tamna donjiBorder duz15 levo5 ${props.poslednja}`}>
                {props.rNaslov}
            </td>
            <td rowSpan='2' className='tamna donjiBorder duz10 levo5'>
                {props.podNaslov1}
            </td>
            <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM1}}/>
            <td>
                {props.v1}
            </td>
        </tr>
        <tr>
            <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM2}}/>
            <td>
                {props.v2}
            </td>
        </tr>
        <tr>
            <td rowSpan='2' className={`tamna donjiBorder levo5 ${props.poslednja}`}>
                {props.podNaslov2}
            </td>
            <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM3}}/>
            <td>
                {props.v3}
            </td>
        </tr>
        <tr className='donjiBorder'>
            <td className={`tamna donjiBorder ${props.poslednja}`} dangerouslySetInnerHTML={{__html: props.rJM4}}/>
            <td className={`${props.poslednja}`}>
                {props.v4}
            </td>
        </tr>
    </React.Fragment>
)
export const Red41 = props => (
    <React.Fragment>
        <tr>
            <td rowSpan='4' className={`tamna donjiBorder duz15 levo5 ${props.poslednja}`}>
                {props.rNaslov}
            </td>
            <td className='tamna donjiBorder duz10 levo5' dangerouslySetInnerHTML={{__html: props.podNaslov1}}/>
            <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM1}}/>
            <td>
                {props.v1}
            </td>
        </tr>
        <tr>
            <td className='tamna donjiBorder levo5' dangerouslySetInnerHTML={{__html: props.podNaslov2}}/>
            <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM2}}/>
            <td>
                {props.v2}
            </td>
        </tr>
        <tr>
            <td className='tamna donjiBorder levo5' dangerouslySetInnerHTML={{__html: props.podNaslov3}}/>
            <td className='tamna donjiBorder' dangerouslySetInnerHTML={{__html: props.rJM3}}/>
            <td>
                {props.v3}
            </td>
        </tr>
        <tr className='donjiBorder'>
            <td className={`tamna donjiBorder levo5 ${props.poslednja}`} dangerouslySetInnerHTML={{__html: props.podNaslov4}}/>
            <td className={`tamna donjiBorder ${props.poslednja}`} dangerouslySetInnerHTML={{__html: props.rJM4}}/>
            <td className={`${props.poslednja}`}>
                {props.v4}
            </td>
        </tr>
    </React.Fragment>
)