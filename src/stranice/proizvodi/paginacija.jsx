import React from 'react'

export const Paginacija = ({ uredjajiPoStrani, ukupnoUredjaja, odaberiStranu, trenutnaStrana }) => {
    const brojStrana = [];
    for(let i =1; i <= Math.ceil(ukupnoUredjaja / uredjajiPoStrani); i++) {
        brojStrana.push(i);
    }
    return (
        <div className='paginacija'>
                <div className='centrirano'>
                {brojStrana.map(broj => (
                    <div className={(trenutnaStrana === broj ? 'aktivnopag' : '') + ' pag-str' } key={broj}>
                        <button onClick={() => odaberiStranu(broj)}>
                            {broj}
                        </button>
                    </div>
                ))}
                </div>
        </div>
    )
}