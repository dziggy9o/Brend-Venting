import React from 'react'

export const Pretraga = props => (
            <div className="vpretraga">
                <input id="PretragaUredjaja"  type="text" value={props.value} onChange={props.onChange} placeholder="Pretraži..."/>
            </div>
)