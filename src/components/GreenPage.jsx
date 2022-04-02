import React, {useContext} from 'react';
import { ColorContext } from '../App';

const GreenPage = () => {
    const Context = useContext(ColorContext);
    return(
        <div>
            {/* <h1>{Context}</h1> */}
            <h1 style={{color: 'green'}}>This is the Green Screen</h1>
        </div>
    )
};

export default GreenPage;