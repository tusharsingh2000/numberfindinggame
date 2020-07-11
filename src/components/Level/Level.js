import React from 'react';
import './Level.css'
const Level = ({level, restart})=>{
    return(<div className='set'>
        <div className='textStyle bpr-2 grow pointer level shadow-2'>Level {level}</div>
        </div>
    );
};
export default Level;