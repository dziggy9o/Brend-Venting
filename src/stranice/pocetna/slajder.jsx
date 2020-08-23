import React from 'react'
import {Carousel} from 'react-bootstrap'

const najave  = [
    {id: 1, naziv: 'Najava1', naslov: 'VAC', podnaslov: 'R32 Inverter', slika: '/imgs/slajder/Najava1.jpg', slikaProizvod: '/imgs/uredjaji/rac/VAC-09CHSD-XA82.png'},
    {id: 2, naziv: 'Najava2', naslov: 'H(2)WMU', podnaslov: 'Dvocevni parapetni fancoil', slika: '/imgs/slajder/Najava2.jpg', slikaProizvod: '/imgs/uredjaji/vk/H-2-WMU-V-08C2.png'},
    {id: 3, naziv: 'Najava3', naslov: 'HWA', podnaslov: 'Kanalski dvocevni troredni fancoil sa visokim statičkim pritiskom', slika: '/imgs/slajder/Najava3.jpg', slikaProizvod: '/imgs/uredjaji/vk/HWA-V-170HC3.png'},
]
export const Slajder = () => {

    return (
            <div className="slajder">
                <Carousel wrap={true} indicators={false} interval={20000} controls={false}>
                    {najave.map(x => {
                        return (
                            <Carousel.Item key={x.id}>
                                <div className='slajd'>
                                    <div className='slajd-tekst-poz'/>
                                    <div className='slajd-tekst'>
                                        <div className="sadrzaj">
                                            <img src={x.slikaProizvod}/>
                                            <h2>{x.naslov}</h2>
                                            <h4>{x.podnaslov}</h4>
                                        </div>
                                        
                                    </div>
                                    <div className='slajd-slika'>
                                        <img src={x.slika} alt={x.naslov}/>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
    )
}