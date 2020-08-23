import React from 'react'
import {Link} from 'react-router-dom'

export const ProizvodLS = props => {
    return (
        <div className='proizvod'>
                        <div className="sadrzajproizvoda">
                            <div className='naziv'>{props.Naziv}</div>
                            <div className="slikaproizvoda"  style={{background: `url('/imgs/uredjaji/${props.Kategorija}/${props.SLIKA1}.png')`}}></div>
                            <div className='detaljnije'>
                                <Link to={props.to}>Više informacija</Link>
                            </div>
                        </div>
         </div>
    )
}