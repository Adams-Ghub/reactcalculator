import React from 'react';

function Calkeys(props){
    return(
        <div style={{width:"24vw",backgroundColor:"#e0e0e0", height:"15vh", color:"#222222",borderWidth:'1px',borderStyle:'solid', borderColor:'black', textAlign:'center'}}>
            <h1>{props.keyval}</h1>

         </div>
    )
}
export default Calkeys;