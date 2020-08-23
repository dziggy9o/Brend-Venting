import React from 'react';
import * as komp from './komponente'
import {VentingProvider} from './baza'
import {BrowserRouter as Router} from 'react-router-dom'




const Venting = () => {
  return (
    <VentingProvider>
      <Router>
        <komp.Header/>
        <div className='sadrzaj'>
        <komp.Rute/>
        <komp.Futer/>
        </div>
        <komp.NavMobileSadrzaj/>
      </Router>
    </VentingProvider>
  );
}
export default Venting;
