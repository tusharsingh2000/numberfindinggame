import React from 'react';
const InputArea = ({ onInputChange , onButtonClick, clearText})=>{
    return(
            <div className='center'>
                <div className='pa3 br5 shadow-5 form center'>
                    <input className='pa2 f3 w-40 center' id='inputNumber' type='number' onChange={onInputChange}></input>
                    <button className='w-30 f3 link grow ph3 pv2 dib white bg-light-purple ml1 pointer' 
                    onClick={onButtonClick}>Check</button>
                    <button className='w-30 f3 link grow ph3 pv2 dib white bg-light-purple ml1 pointer' 
                    onClick={clearText}>Clear</button>
                </div>
            </div>
    );
};
export default InputArea;