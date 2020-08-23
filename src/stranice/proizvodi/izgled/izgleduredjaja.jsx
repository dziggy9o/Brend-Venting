import React from 'react';
import * as Ven from './kategorijeizgled';


export const Uredjaj = props => {
    switch(props.SPECS) {
        case 'RACZ':
            return <Ven.RacIzgledZidna {...props} />
        case 'RACP':
            return <Ven.RacIzgledProzorska {...props} />
        case 'MLTZ':
            return <Ven.MltIzgledZidna {...props} />
        case 'MLTK':
            return <Ven.MltIzgledKaseta {...props} />
        case 'MLTS':
            return <Ven.MltIzgledSpoljna {...props} />
        case 'CACK':
            return <Ven.CacIzgledKaseta {...props} />
        case 'CACPP':
            return <Ven.CacIzgledPP {...props} />
        case 'CACS':
            return <Ven.CacIzgledSpoljna {...props} />
        case 'CACKAN':
            return <Ven.CacIzgledKanalska {...props} />
        case 'CACS2':
            return <Ven.CacIzgledSpoljna2 {...props} />
        case 'CACKAN2':
            return <Ven.CacIzgledKanalska2 {...props} />
        case 'VKPP':
            return <Ven.VkIzgledPP {...props} />
        case 'VKZ':
            return <Ven.VkIzgledZidna {...props} />
        case 'VKKAN':
            return <Ven.VkIzgledKanalska {...props} />
        case 'VKK':
            return <Ven.VkIzgledKaseta {...props} />
        case 'REK':
            return <Ven.RekuperatorIzgled {...props} />
        case 'REK2':
            return <Ven.RekuperatorIzgled2 {...props} />
        case 'KP':
            return <Ven.KondezPumpaIzgled {...props} />
        default:
            return <div>Proba</div>
    }
    }
