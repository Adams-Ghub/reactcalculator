import React from 'react'

function Spkey(props){
    return(
        <div style={{width:"24vw",backgroundColor:"#f5923d", height:"15vh", color:"white",borderWidth:'1px',borderStyle:'solid', borderColor:'black',borderLeftColor:'white', textAlign:'center'}}>
            <h2>
              {props.value}  
            </h2>
        </div>
    )
}
export default Spkey