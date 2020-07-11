import React from 'react';
const Intruction = ({levelNumber})=>{
    return(
        <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-5">
        <div className="pa3 bt b--black-10">
        <p className="f3 b tc">Instruction</p>
          <p className="f6 f5-ns lh-copy measure">
          Guess a number between 1 and {levelNumber}, if you guessed the right number game will move to next level you will have as many attempts as you want.
          </p>
        </div>
      </article>
    );
};
export default Intruction;