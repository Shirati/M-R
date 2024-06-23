
import home from '../images/Home.png'
import * as React from 'react';

export default function Home() {

    return (
        <>
            <img src={home} alt='' style={{  width: '50%', 
  height: '70%',
  
                    alignContent: 'center',
                    position: 'center',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: 'auto'}}/>
        </>
      
    )
}


