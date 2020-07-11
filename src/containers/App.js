import React from 'react';
import InputArea from '../components/inputArea';
import Instrucion from '../components/instruction';
import Green from '../components/Green/Green';
import Red from '../components/Red/Red';
import Yellow from '../components/Yellow/Yellow';
import Blue from '../components/Blue/Blue';
import Level from '../components/Level/Level';
import 'tachyons';

 

class App extends React.Component{
  constructor(){
    super()
    
    this.state={
      input:'',
      answer:'',
      level: 1,
      levelNumber: 100
}
  }
  number={};
  componentDidMount(){
    this.number.val = Math.floor((Math.random() *  this.state.levelNumber) + 1);
  }

  updateLevelNumber = () =>{
    this.number.val = Math.floor((Math.random() *  (this.state.levelNumber+100)) + 1);
  }


  onInputChange = (event) =>{
    this.setState({input : event.target.value });
  }
  
  onButtonClick=()=>{
    if(this.state.input.length){
      var a = parseInt(this.state.input);
      var b = this.number.val;
      var result = a-b;
      if (result<1){
        result=result*-1;
      };
      if (result===0){
        this.setState({answer:'green'});
        this.setState({level:this.state.level+1});
        this.setState({levelNumber:this.state.levelNumber+100});
        this.updateLevelNumber();
        setTimeout(this.levelPass, 2000)
      }else if(result>=1 && result<=4){
        this.setState({answer:'red'});
      }else if(result>=5 && result<=15){
        this.setState({answer:'yellow'});
      }else{
        this.setState({answer:'blue'});
      }
      
    }
  }
  levelPass =()=>{
    alert('You are promoted to next level.')
    this.clearText();
  }
  clearText=()=>{
    document.getElementById('inputNumber').value = "";
    this.setState({input : ''});
    this.setState({answer:''});
  }    


  render(){
    return(
      <div>
        <div className="f2 b tc pa2">Number Guessing Game</div>
        <Level level={this.state.level}/>
        <Instrucion levelNumber={this.state.levelNumber}/>
        <InputArea onInputChange = {this.onInputChange} onButtonClick = {this.onButtonClick} clearText={this.clearText}/>
        {this.state.answer.length
        ?
        (
        this.state.answer === 'green' 
        ?
          <Green/>
        :
        (
          this.state.answer === 'red'
          ?
          <Red/>
          :
          (
            this.state.answer === 'yellow'
            ?
            <Yellow/>
            :
            this.state.answer === 'blue'
            ?
            <Blue/>
            :
            <div></div>
          )
        )
        )
        :
        <div></div>
        }
        </div>
    )
  }
}

export default App;
