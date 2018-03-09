import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import { blue100, blue700, yellow100, red400 } from 'material-ui/styles/colors';

const BASE =2;
class App extends Component {


  constructor(){
    super();
    this.state={
      binaryInput:[0,0,0,0,0,0,0,0],
      binaryString:'',
      decimalOutput:0
    };
  }


 createBinaryArray =(index)=>{
   let tempArray = this.state.binaryInput;
   tempArray[index] =  (tempArray[index]==1)?0:1;

   let bString = this.state.binaryInput.join('');
   
   this.setState({
    binaryInput: tempArray,
    binaryString:bString,
    decimalOutput: this.decimalOutput
   });
 } 

convertToDecimal=() =>{

 let decimalNumber = parseInt(this.state.binaryString,BASE);

 this.setState({
  decimalOutput:decimalNumber
 });

 }

  render() {
    return (
     <MuiThemeProvider>
       <Paper style={{width:300,height:180,backgroundColor:blue100}}>
       <div id='main-wrap' styles={{float:'left',width:100,backgroundColor:blue700}}>
          <div id='chckbx-wrap' styles={{float:'left',width:'100%'}}>
          <div id='div1' style={{float:'left',width:'12.5%'}}><Checkbox id='chckbx-1' onClick={(e,)=>{this.createBinaryArray(0);}}/></div>
          <div id='div2' style={{float:'left',width:'12.5%'}}><Checkbox id='chckbx-1' onClick={(e,)=>{this.createBinaryArray(1);}}/></div>
          <div id='div3' style={{float:'left',width:'12.5%'}}><Checkbox id='chckbx-1' onClick={(e,)=>{this.createBinaryArray(2);}}/></div>
          <div id='div4' style={{float:'left',width:'12.5%'}}><Checkbox id='chckbx-1' onClick={(e,)=>{this.createBinaryArray(3);}}/></div>
          <div id='div5' style={{float:'left',width:'12.5%'}}><Checkbox id='chckbx-1' onClick={(e,)=>{this.createBinaryArray(4);}}/></div>
          <div id='div6' style={{float:'left',width:'12.5%'}}><Checkbox id='chckbx-1' onClick={(e,)=>{this.createBinaryArray(5);}}/></div>
          <div id='div7' style={{float:'left',width:'12.5%'}}><Checkbox id='chckbx-1' onClick={(e,)=>{this.createBinaryArray(6);}}/></div>
          <div id='div8' style={{float:'left',width:'12.5%'}}><Checkbox id='chckbx-1' onClick={(e,)=>{this.createBinaryArray(7);}}/></div>
          <TextField id='binaryLabel' style={{float:'center',width:'100%', backgroundColor:yellow100}} value={this.state.binaryString}/>
          <RaisedButton id='convrt-btn'  label='Convert to Decimal' style={{float:'center',width:'100%', backgroundColor:red400}} onClick={(e)=>{this.convertToDecimal();}}/>
          <TextField id='decimalLabel' style={{float:'center',width:'100%', backgroundColor:yellow100}} value={this.state.decimalOutput}/>
        
        </div>
       </div>
       </Paper>


     </MuiThemeProvider>
    );
  }
}

export default App;
