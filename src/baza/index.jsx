import React, {useState, createContext} from 'react'

import {VentingUredjaji} from './lista'

export const VentingContext = createContext();
export const TrenutnaStrContext = createContext();
export const UredjajiPoStrContext = createContext();
export const PretragaUredjajaContext = createContext();
export const PretragaUkljIsklj = createContext();
export const MobNavContext = createContext();

export const VentingProvider = props => {
    const [uredjaji, postaviUredjaje] = useState(VentingUredjaji)
    const [trenutnaStrana, postaviTrenutnuStranu] = useState(1);
    const [uredjajiPoStrani, postaviUredjajePoStrani] = useState(20);
    const [pretragaUredjaja, pretraziUredjaje] = useState('');
    const [vpretraga, prikaziVPRETRAGU] = useState(false);
    const [mobNav, setmobNav] = useState(false);
    return (
        <VentingContext.Provider value={[uredjaji, postaviUredjaje]}>
            <TrenutnaStrContext.Provider value={[trenutnaStrana, postaviTrenutnuStranu]}>
                <UredjajiPoStrContext.Provider value={[uredjajiPoStrani, postaviUredjajePoStrani]}>
                    <PretragaUredjajaContext.Provider value={[pretragaUredjaja, pretraziUredjaje]}>
                        <PretragaUkljIsklj.Provider value={[vpretraga, prikaziVPRETRAGU]}>
                            <MobNavContext.Provider value={[mobNav, setmobNav]}>
                                {props.children}
                            </MobNavContext.Provider>
                        </PretragaUkljIsklj.Provider>
                    </PretragaUredjajaContext.Provider>
                </UredjajiPoStrContext.Provider>
            </TrenutnaStrContext.Provider>
        </VentingContext.Provider>

    )
}