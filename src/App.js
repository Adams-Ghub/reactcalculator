import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calkeys from './key-component.js';
import Spkey from './specialKeys.js';
import Zerokeypad from './zerokey';

function App() {
  return (
    <div className="App" >
      <div style={{padding:'60px'}}>
            <div style={{backgroundColor:"#848695", height:"15vh", width:"90vw"}}>
                <h1 style={{fontSize:'40px',color:'white',textAlign:'right', margin:'4px'}}>
                  0
                </h1>

            </div>
            <div style={{display:'flex', flexDirection:'row' }}>
            <Calkeys keyval="AC"/>
              <Calkeys keyval="+/-"/>
              <Calkeys keyval="%"/>
              <Spkey value='÷'/>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
              <Calkeys keyval="7"/>
              <Calkeys keyval="8"/>
              <Calkeys keyval="9"/>
              <Spkey value='x'/>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
              <Calkeys keyval="4"/>
              <Calkeys keyval="5"/>
              <Calkeys keyval="6"/>
              <Spkey value='-'/>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
              <Calkeys keyval="1"/>
              <Calkeys keyval="2"/>
              <Calkeys keyval="3"/>
              <Spkey value='+'/>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
              <Zerokeypad/>
              <Calkeys keyval="."/>
              <Spkey value='='/>
            </div>
      </div>
    </div>
  );
}

export default App;
