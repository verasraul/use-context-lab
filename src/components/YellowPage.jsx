// import React from "
import React, {useContext} from 'react';
import { ColorContext } from '../App';

function YellowPage(){
    const Context = useContext(ColorContext);
    console.log(Context);
    return(
        <div>
            <h1 style={{color: 'yellow'}}>This is the YellowPage</h1>
        </div>
    )
}

export default YellowPage;