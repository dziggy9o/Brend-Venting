import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {PretragaUkljIsklj} from '../../../baza'
import {Kategorije, KategorijeMob} from './kategorije'
import {Pretraga} from './pretraga'


export const FilterUredjaja = props => {
    const [vpretraga, prikaziVPRETRAGU] = useContext(PretragaUkljIsklj);
    let istorija = useHistory()
    const ukljPret = () => {prikaziVPRETRAGU(true); istorija.push('/proizvodi') }
    const iskljPret = () => {prikaziVPRETRAGU(false); istorija.goBack()}
    const ukljIskljPret = vpretraga ? iskljPret : ukljPret
    return (
        <React.Fragment>
            <Kategorije {...props} izmena={ukljIskljPret} />
            <KategorijeMob {...props} izmena={ukljIskljPret} />
            {vpretraga ? <Pretraga {...props} /> : null}
        </React.Fragment>
    )
};
export {KatNavigacija} from './kategorije';