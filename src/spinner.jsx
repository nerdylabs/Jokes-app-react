import React, {Fragment} from 'react';
import spinnerImg from './assets/spinner.gif'

const Spinner = ()=>(
    <Fragment>
        <img src={spinnerImg} alt="loading" style={{width:'200px', margin:'auto', display:'block'}} />
    </Fragment>
)

export default Spinner;